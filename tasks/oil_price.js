const url = 'https://www.z2zz.cn/api/today/oilpricev2?fromopenid=o5dT90N1AuG1r0cUzNuSti_toMPQ&city=%E9%99%95%E8%A5%BF&scene=1005&lat=34.16765462239584&lon=108.89948838975694&isIos=1';

const headers = {
    'Connection': 'keep-alive',
    'openid': 'o5dT90N1AuG1r0cUzNuSti_toMPQ',
    'scene': '1005',
    'useTimes': '3',
    'Content-Type': 'application/json',
    'isIos': '1',
    'unionid': 'oWAqX5kDvtnLfYsw5fAYkhpIXrE4',
    'isVip': '0',
    'pf': 'ios',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.50(0x18003237) NetType/WIFI Language/zh_CN',
    'Referer': 'https://servicewechat.com/wxf5e1ca323c8da12a/355/page-frame.html'
};

$httpClient.get(url, headers, function(error, response, data) {
    if (error) {
        console.log('请求失败: ', error);
        $notification.post('请求错误', '', error);
    } else {
        console.log('请求成功，返回数据: ', data);
        $notification.post('请求成功', response.status, data);
    }
});
