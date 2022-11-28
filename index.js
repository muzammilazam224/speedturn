const express = require('express')
const jsforce = require('jsforce')
// AWS.config.update({region:'us-east-1'});

var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));// app.use(express.json()) 
// const PORT = 3001
const PORT = process.env.PORT || 3000;

require('dotenv').config()
const AWS = require('aws-sdk');

// const SESConfig = {
//     apiVersion: "latest",
//     credentials: {
//         AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
//         AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
//       },


    
//     region: "us-east-1"
// }
// AWS.config.update(SESConfig);
AWS.config.loadFromPath('./config.json');

// console.log('process : ',AWS.config)


var connect = new AWS.Connect();
// app.get('/', (req, res)=>{
//     var params = {
//         ContactFlowId: "db0e367a-9c04-4574-b81e-1755e8380a3d",
//         DestinationPhoneNumber: "+16504819700",  
//         InstanceId: "5578d8b7-815b-40a2-a080-171da1415d2e",
//         QueueId: "ee1c1e4f-2e59-4660-9d55-0bba4ca8a6a8",
//         SourcePhoneNumber: "+12409951559"
//     };
    
//     // method used to initiate the outbound call from Amazon Connect
//     connect.startOutboundVoiceContact(params, function(err, data) {
//         if (err) console.log('hello',err, err.stack) ;
//         else res.send('Hello')
//     });
// })
app.get('/speedturn', (req, res)=>{

    console.log("Hello world");
    // let tempNumber=req.body.destPhoneNumber;
    // tempNumber=tempNumber.replace(/\s+/, "")
    // let destinationNo='+'+tempNumber
    // var params = {
    //     ContactFlowId: "db0e367a-9c04-4574-b81e-1755e8380a3d",
    //     DestinationPhoneNumber: destinationNo,  
    //     InstanceId: "5578d8b7-815b-40a2-a080-171da1415d2e",
    //     QueueId: "ee1c1e4f-2e59-4660-9d55-0bba4ca8a6a8",
    //     SourcePhoneNumber: "+12409951559"
    // };
    // console.log("body" +destinationNo);
    // // method used to initiate the outbound call from Amazon Connect
    // connect.startOutboundVoiceContact(params, function(err, data) {
    //     if (err) console.log('hello',err, err.stack) ;
    //     else res.send('Hello')
    // });
    
})










//sms
// var sns = new AWS.SNS();

// function sendSMS(to_number, message, cb) {

//     sns.publish({
//         Message: message,
//         Subject: 'Admin',
//         PhoneNumber:to_number
//     }, cb);

//   }

//   const PhoneNumberArray = ['+16504819700']
//   PhoneNumberArray.forEach(number => {
//     sendSMS(number, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", (err, result)=>{
//         console.log("RESULTS: ",err,result)
//       })
//   })


//



















// const {SF_LOGIN_URL, SF_USERNAME, SF_PASSWORD, SF_TOKEN} = process.env
// const conn = new jsforce.Connection({
//     loginUrl: SF_LOGIN_URL
// })
// conn.login(SF_USERNAME, SF_PASSWORD+SF_TOKEN, (err,userInfo)=>{
//     if(err){
//         console.error(err);
//     }
//     else{
//         console.log("User Id"+userInfo.id)
//         console.log("Org Id"+userInfo.organizationId)

//     }
// })
// app.get('/', (req, res)=>{
//     conn.query("SELECT Id, Name FROM Account",(err, result)=>{
//         if(err){
//             res.send(err)
//         }else{
       
//             res.json(result.records)
//         }
//     })
//     //res.send("Salesforce integration with nodejs")
// })
// app.get('/', (req, res)=>{
   
    //res.send("Salesforce integration with nodejs")
// main entry to the flow
// console.log('hello')
// exports.handler = (event, context, callback) => {
//     //define parameter values to use in initiating the outbound call

//     var params = {
//         ContactFlowId: " db0e367a-9c04-4574-b81e-1755e8380a3d",
//         DestinationPhoneNumber: "+13037850787",
//         InstanceId: "5578d8b7-815b-40a2-a080-171da1415d2e",
//         QueueId: "ee1c1e4f-2e59-4660-9d55-0bba4ca8a6a8",
//         Attributes: {"Name": "MyAttribute"},
//         SourcePhoneNumber: "+13130850787"
//     };

//     // method used to initiate the outbound call from Amazon Connect
//     connect.startOutboundVoiceContact(params, function(err, data) {
//         if (err) console.log(err, err.stack) ;
//         else console.log(data);
//     });

//     callback(null, event);

// };

// })
// app.listen(app.get('port'),function(){
//     console.log("Server running at "+app.get('port'));
// });

app.listen(PORT, () => {
    console.log(`App is running on port ${ PORT }`);
});



