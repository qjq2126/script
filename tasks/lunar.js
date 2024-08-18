let url = 'https://apis.tianapi.com/lunar/index?key=68383a430f95244ce89c46c0bb0d7d7c';
if (typeof $task !== "undefined") {
    $task.fetch(url).then(
      function (response) {
        $notify(response.body);
      },
      function (error) {
        console.log(error);
      }
    );
  }
