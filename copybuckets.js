// Load the SDK and UUID
var AWS = require('aws-sdk');

AWS.config.update({accessKeyId: '', secretAccessKey: ''});
//AWS.config.update({region: 'us-west-1'});

// Create an S3 client
var s3 = new AWS.S3();

var params = {
  Bucket: 'ehl3',
  Key: 'crypto.pdf',
  CopySource: 'ehl1/ejemplo.pdf',
  ACL: 'public-read',
  ServerSideEncryption: 'AES256'
};

s3.copyObject(params, function(err, data) {
  if (err) console.log(err, err.stack);
  else     console.log(data);
});

/*
var params = {
  Bucket: 'STRING_VALUE', //required
  CopySource: 'STRING_VALUE', // required
  Key: 'STRING_VALUE', //required
  ACL: 'private | public-read | public-read-write | authenticated-read | bucket-owner-read | bucket-owner-full-control',
  CacheControl: 'STRING_VALUE',
  ContentDisposition: 'STRING_VALUE',
  ContentEncoding: 'STRING_VALUE',
  ContentLanguage: 'STRING_VALUE',
  ContentType: 'STRING_VALUE',
  CopySourceIfMatch: 'STRING_VALUE',
  CopySourceIfModifiedSince: new Date || 'Wed Dec 31 1969 16:00:00 GMT-0800 (PST)' || 123456789,
  CopySourceIfNoneMatch: 'STRING_VALUE',
  CopySourceIfUnmodifiedSince: new Date || 'Wed Dec 31 1969 16:00:00 GMT-0800 (PST)' || 123456789,
  CopySourceSSECustomerAlgorithm: 'STRING_VALUE',
  CopySourceSSECustomerKey: 'STRING_VALUE',
  CopySourceSSECustomerKeyMD5: 'STRING_VALUE',
  Expires: new Date || 'Wed Dec 31 1969 16:00:00 GMT-0800 (PST)' || 123456789,
  GrantFullControl: 'STRING_VALUE',
  GrantRead: 'STRING_VALUE',
  GrantReadACP: 'STRING_VALUE',
  GrantWriteACP: 'STRING_VALUE',
  Metadata: {
    someKey: 'STRING_VALUE',
    // anotherkey
  },
  MetadataDirective: 'COPY | REPLACE',
  SSECustomerAlgorithm: 'STRING_VALUE',
  SSECustomerKey: 'STRING_VALUE',
  SSECustomerKeyMD5: 'STRING_VALUE',
  SSEKMSKeyId: 'STRING_VALUE',
  ServerSideEncryption: 'AES256',
  StorageClass: 'STANDARD | REDUCED_REDUNDANCY',
  WebsiteRedirectLocation: 'STRING_VALUE'
};
*/
