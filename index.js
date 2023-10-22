const express = require('express');
const app = express();
const {RtcTokenBuilder, RtcRole} = require('agora-token');
let channels = ["m6south_channel","m6north_channel","m1north_channel","m1south_channel"];
let main = [];
function generateTokens(){
    const now = new Date();
    const currentDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    let date = main.length ? main[0].date : '';
    console.log(date);
    if(date == '' || currentDate !== date){
        main = [];
        channels.forEach((item)=>{
            let tkn = RtcTokenBuilder.buildTokenWithUserAccount('35204183872047d682d67bc583c0b512','8c7be002e6024228947fa62efe1044e6',item,'',RtcRole.PUBLISHER,86400);
            let obj = {
                channel : item,
                token : tkn,
                date  : currentDate
            }
            main.push(obj);
        });
    }
}


app.get('/tokens',(req,res)=>{
    generateTokens();
    res.send(main);
})

app.listen(3122,()=>{
    console.log('app is running on http://localhost:3122')
})