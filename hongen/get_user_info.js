let body = $response.body;
let obj = JSON.parse(body);

obj.result.userinfo.app_user_rights.ff.vip = 1;          // 第一段：0    第二段：1
obj.result.userinfo.app_user_rights.ff.vip_expire_time = 1731846608;  // 第一段：不存在    第二段：1731846608

obj.result.userinfo.vip.expire_time = 1731846606;      // 第一段：不存在    第二段：1731846606
obj.result.userinfo.vip.last_product_id = "";  // 第一段：不存在    第二段："" (空字符串)
obj.result.userinfo.vip.purchase_ts = 1731587406;       // 第一段：不存在    第二段：1731587406
obj.result.userinfo.vip.sub_end_ts = 0;       // 第一段：不存在    第二段：0
obj.result.userinfo.vip.vip_type = 2;         // 第一段：0    第二段：2


body = JSON.stringify(obj);
$done({body});
