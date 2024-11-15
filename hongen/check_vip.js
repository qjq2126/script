let body = $response.body;
let obj = JSON.parse(body);
obj.result

body = JSON.stringify(obj);
$done({body});