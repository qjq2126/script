let body = $response.body;
let obj = JSON.parse(body);
obj.data.time_start = '1716568323000';
obj.data.time_end = '19977168300000';
obj.data.name = '太行';
obj.data.perms.workout_merge = '1';
obj.data.perms.map_skin = '4';
obj.data.perms.workout_merge = '1';
obj.data.perms.workout_map_hidden = '1';
obj.data.perms.pannel_object_2 = '1';
obj.data.perms.avatar = '1';
obj.data.perms.share_page = '1';
obj.data.perms.career_data = '1';
obj.data.perms.power_est = '1';
obj.data.perms.workout_rear = '1';
obj.data.perms.segment_contrast = '1';
obj.data.perms.pannel_object_5 = '1';
obj.data.perms.license_number_skin = '1';

obj.data.month_buy = '3';

obj.data.benefit = '["HEAT算力增加5%", "运动会PRO赛事包"]';
obj.data.benefit_can = '1';
obj.data.time_start_visual = "2024-05-25T00:32:03.772816";
obj.data.time_end_visual = "2024-06-25T00:32:03.772736";
obj.data.perms_zh = '["地图皮肤0种", "轨迹合并", "隐藏地图", "PRO表盘1", "PRO会员头像框", "PRO会员分享页面", "生涯数据", "功率估算", "实景轨迹"]';


body = JSON.stringify(obj);
$done({body});
