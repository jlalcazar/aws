var AWS = require('aws-sdk');
aws.config.loadFromPath('./AwsConfig.json');
//AWS.config.update({region: 'us-west-1'});


var s3 = new AWS.S3();

var bucketName = 'ehl1';
var keyName = 'hello1.txt';


s3.createBucket({Bucket: bucketName}, function() {
  var params = {Bucket: bucketName, Key: keyName, Body: 'Hello World!'};
  s3.putObject(params, function(err, data) {
    if (err)
      console.log(err)
    else
      console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
  });
});
