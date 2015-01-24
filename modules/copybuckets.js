/*jshint -W117 */
var AWS = require('aws-sdk');
AWS.config.loadFromPath('./AwsConfig.json');
var s3 = new AWS.S3();

var params = {
  Bucket: 'ami.labutaca.net',
  Key: 'ejemplo.txt',
  CopySource: 'cache.labutaca.net/test4.txt',
  ACL: 'public-read',
  ServerSideEncryption: 'AES256'
};

s3.copyObject(params, function(err, data) {
	if (err) {
		console.log(err, err.stack);
	} else {
		console.log(data);
	}
});
