const express = require('express');
const app = express();
const {RtcTokenBuilder, RtcRole} = require('agora-token');



app.get('/tokens',(req,res)=>{
    let channels = ["m6south_channel","m6north_channel","m1north_channel","m1south_channel"];
    let tokens = [];
    let main = [];
    channels.forEach((item)=>{
        let tkn = RtcTokenBuilder.buildTokenWithUserAccount('30d769835fbc4e299da69364b4b6629d','92a6f09ed15d426f97c668d5f270fc6f',item,'',RtcRole.PUBLISHER,86400);
        let obj = {
            channel : item,
            token : tkn
        }
        tokens.push(tkn);
        main.push(obj);
    });
    console.log('tpkems',tokens);
    console.log('minaaaa',main);
    res.send(main);
})

app.listen(3122,()=>{
    console.log('app is running on http://localhost:3122')
})