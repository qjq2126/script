let body = $response.body;
let obj = JSON.parse(body);
obj.data.time_start = '1716568323000';
obj.data.time_end = '1719246723000';
obj.data.name = '太行';
obj.data.perms.workout_merge = '1';
obj.data.perms.map_skin = '2';
obj.data.perms.workout_merge = '1';
obj.data.perms.workout_map_hidden = '1';
obj.data.perms.pannel_object_2 = '1';
obj.data.perms.avatar = '1';
obj.data.perms.share_page = '1';
obj.data.perms.career_data = '1';
obj.data.perms.power_est = '1';
obj.data.perms.workout_rear = '1';
obj.data.perms.segment_contrast = '0';
obj.data.perms.pannel_object_5 = '0';
obj.data.perms.license_number_skin = '1';


body = JSON.stringify(obj);
$done({body});
