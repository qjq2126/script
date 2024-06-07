let body = $response.body;
let obj = JSON.parse(body);
obj.data.user.pro_stime = '1716568323000';
obj.data.user.pro_etime = '19977168300000';

obj.data.user.pro_name = '太行';



body = JSON.stringify(obj);
$done({body});
