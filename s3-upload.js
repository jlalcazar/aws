var AWS = require('aws-sdk');
AWS.config.loadFromPath('./AwsConfig.json');
var s3 = new AWS.S3();

var params = {
	Bucket: 'cache.labutaca.net',
	Key: 'test1.txt'
};

s3.putObject(params, function (err, data) {
	if (err)
		console.log(err)
	else
		console.log( "Successfully uploaded data " );
});
