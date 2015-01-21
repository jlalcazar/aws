var AWS = require('aws-sdk');
AWS.config.loadFromPath('./AwsConfig.json');


var s3 = new AWS.S3();

var bucketName = 'cache.labutaca.net';
var keyName = 'test.txt';

  var params = {Bucket: bucketName, Key: keyName, Body: 'Hello World!'};
  s3.putObject(params, function(err, data) {
    if (err)
      console.log(err)
    else
      console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
  });

