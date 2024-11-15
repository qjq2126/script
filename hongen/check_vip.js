let body = $response.body;
let obj = JSON.parse(body);
obj.result[0].user_status_resp.effective_vip = true;
obj.result[0].user_status_resp.l1_l3_package = false;
obj.result[0].user_status_resp.l1_l9_package = false;
obj.result[0].user_status_resp.l4_l9_package = false;

body = JSON.stringify(obj);
$done({body});
