// 获取响应对象
let response = $response
let response = {
    status: 200, // 将状态码修改为200
    headers: {
        // 设置响应头
        "Date": "Sat, 24 Aug 2024 02:28:21 GMT",
        "Content-Type": "application/json; charset=UTF-8",
        "Transfer-Encoding": "chunked",
        "Connection": "keep-alive"
        "x-envoy-upstream-service-time": "3"
        "content-encoding": "gzip",
        "vary": "Accept-Encoding"
    },
    body: JSON.stringify({
        // success: true,
        // message: "This is a modified response"
        "created_at": "2024-08-29T02:21:32.000000+00:00",
        "expire_at": "2024-08-29T15:59:59.000000+00:00",
        "id": "pdvlx",
        "updated_at": "2024-08-24T02:21:32.000000+00:00",
        "user_id": "snaooz"
}
    }) // 设置新的响应内容
};

// 输出修改后的响应
$done({response});