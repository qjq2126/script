// 行者 Pro 响应注入脚本
// Shadowrocket http-response 脚本
// 用途: 拦截 4 个关键接口的响应, 把非会员状态改写为 PRO 用户配置
//
// 触发接口:
//   1. GET  /api/v4/account/get_user_info      - 用户信息 (含 perms 字典)
//   2. GET  /api/v1/goods/pro/perms/           - 主权限字典
//   3. GET  /api/goods/pro/49/perms/           - 商品 49 详细权限
//   4. GET  /api/v1/goods/pro/iap/             - IAP 商品列表 (含 pro_status)
//
// 输入: $response.body 已被 Shadowrocket 自动解压 (gzip/deflate)
// 输出: $done({ body }) - 改写后的响应体

// ============ 太行 Pro 配置 (基于新抓包真实响应) ============
// time_end 用 2099-01-01 表示"长期有效"
const PRO_PERMS = {
  workout_merge:       1,         // 轨迹合并
  workout_map_hidden:  1,         // 隐藏地图
  pannel_object_2:     1,         // PRO 表盘 1
  pannel_object_5:     1,         // PRO 表盘 2 (太行默认 0, 这里全开)
  map_skin:           99,         // 地图皮肤 (太行 2, 这里给 99)
  license_number_skin: 1,         // 车牌皮肤
  avatar:              1,         // PRO 头像框
  share_page:          1,         // PRO 分享页
  career_data:         1,         // 生涯数据
  power_est:           1,         // 功率估算
  workout_rear:        1,         // 实景轨迹
  segment_contrast:    1          // 分段对比 (太行默认 0, 这里全开)
};

// 用于 user_info / pro/perms 接口的 data 字段覆盖
const PRO_DATA = {
  time_start: 1782649288000,        // 2026-06-28T20:21:28
  time_end:   2147483647000,        // 2099-01-01T00:00:00
  name: "太行",                     // pro 套餐名称
  perms: PRO_PERMS,
  month_buy:   1,
  benefit:    ["HEAT算力增加5%", "运动会PRO赛事包", "全部Pro地图皮肤"],
  benefit_can: 1,
  time_start_visual: "2026-06-28T20:21:28",
  time_end_visual:   "2099-01-01T00:00:00"
};

// 用于 /api/v1/goods/pro/iap/ 的 pro_status 字段覆盖 (从新抓包真实响应提取)
const PRO_STATUS = {
  end_time:          2147483647000,    // 2099-01-01T00:00:00 (原本 1785327688000)
  is_subscribe:      true,
  product_id:        "623",
  is_trial_period:   true,
  iap_skip_pop_status: true
};

// ============ 主逻辑 ============
try {
  const url = $request.url;
  let bodyStr = $response.body;

  if (typeof bodyStr !== "string") {
    $done({});
  }

  let obj;
  try {
    obj = JSON.parse(bodyStr);
  } catch (e) {
    $done({});
  }

  if (!obj || obj.code !== 0 || !obj.data || typeof obj.data !== "object") {
    $done({});
  }

  // ============ 按接口分支处理 ============
  if (url.includes("/api/v1/goods/pro/iap/")) {
    // IAP 接口: data.pro_status 是 PRO 状态判定
    obj.data.pro_status = PRO_STATUS;
  } else if (url.includes("/api/v4/account/get_user_info")
          || url.includes("/api/v1/goods/pro/perms/")
          || url.includes("/api/goods/pro/49/perms/")) {
    // 用户信息 / 权限字典接口: 整体覆盖 data.perms 和时间字段
    // 保留 maps / user_info 等只读字段, 只覆盖 PRO 状态字段
    if ("perms" in obj.data) {
      Object.assign(obj.data, PRO_DATA);
    } else {
      // 没有 perms 字段 (例如只返回 user_info), 注入完整 PRO_DATA
      Object.assign(obj.data, PRO_DATA);
    }
  }

  // ============ 处理 headers ============
  // 删除 Content-Encoding (Shadowrocket 已自动解压, 重写时不能再次声明)
  // 删除 Content-Length (让 Shadowrocket 重新计算)
  const headers = Object.assign({}, $response.headers);
  ["Content-Encoding", "content-encoding"].forEach(k => delete headers[k]);
  ["Content-Length", "content-length"].forEach(k => delete headers[k]);

  $done({
    status: 200,
    headers: headers,
    body: JSON.stringify(obj)
  });

} catch (err) {
  console.log("xingzhe_pro_inject error: " + err);
  $done({});
}