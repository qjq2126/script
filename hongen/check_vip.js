let body = $response.body;
let obj = JSON.parse(body);
obj.result[0].

body = JSON.stringify(obj);
$done({body});