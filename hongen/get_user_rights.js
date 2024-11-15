let body = $response.body;
let obj = JSON.parse(body);

obj.result.vip_info.vip_type = 2;
obj.result.vip_info.expire_time = 1831846606;


body = JSON.stringify(obj);
$done({body});
