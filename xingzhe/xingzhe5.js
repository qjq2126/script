/*
行者 Pro 会员本地重写脚本
*/

let body = $response.body;
let obj = JSON.parse(body);

// 强制覆写为太行会员数据
obj.data = {
  "time_start": 1782649288000,
  "time_end": 1882649288000, // 顺延至2029年
  "name": "太行",
  "perms": {
    "map_skin": 2,
    "workout_merge": 1,
    "workout_map_hidden": 1,
    "pannel_object_2": 1,
    "avatar": 1,
    "share_page": 1,
    "career_data": 1,
    "power_est": 1,
    "workout_rear": 1,
    "segment_contrast": 1, // 顺手激活赛段对比
    "pannel_object_5": 1,   // 顺手激活5号表盘
    "license_number_skin": 1
  },
  "month_buy": 1,
  "benefit": ["HEAT算力增加5%", "运动会PRO赛事包"],
  "benefit_can": 1,
  "time_start_visual": "2026-06-28T20:21:28",
  "time_end_visual": "2029-06-28T20:21:28",
  "perms_zh": ["地图皮肤0种", "轨迹合并", "隐藏地图", "PRO表盘1", "PRO会员头像框", "PRO会员分享页面", "生涯数据", "功率估算", "实景轨迹"],
  "user_info": {
    "id": 5670703,
    "name": "瞿佳琦2126"
  }
};

// 将修改后的对象重新转回字符串并返回给客户端
$done({body: JSON.stringify(obj)});
