/*jshint -W117 */
var AWS = require('aws-sdk');
AWS.config.loadFromPath('./AwsConfig.json');
var s3 = new AWS.S3();

var params = {
  Bucket: 'cache.labutaca.net',
  Key: 'test4.txt',
  MFA: '',
  VersionId: 'null'
};
s3.deleteObject(params, function(err, data) {
  if (err) {
		console.log(err, err.stack);
	} else {
		console.log(data);
	}
});

