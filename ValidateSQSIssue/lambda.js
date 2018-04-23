let AWS = require('aws-sdk');
let SL_AWS = require('slappforge-sdk-aws');
const sqs = new SL_AWS.SQS.undefined(AWS);
exports.handler = function (event, context, callback) {
	sqs.receiveMessage({
		QueueUrl: 'https://sqs.us-east-1.amazonaws.com/318300609668/SQSValidate',
		AttributeNames: ['All'],
		MaxNumberOfMessages: '1',
		VisibilityTimeout: '30',
		WaitTimeSeconds: '0'
	}, function (receivedMessages) {
		receivedMessages.forEach(message => {
			// your logic to access each message through out the loop. Each message is available under variable message 
			// within this block
		})
	}, function (error) {
		// implement error handling logic here
	});



	callback(null, 'Successfully executed');
}