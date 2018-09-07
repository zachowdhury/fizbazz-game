import express from 'express';
import  fizbuzzLogic,{ multiply }  from './modules/Logic';

const env = {
    HOST : '192.168.68.101',
    PORT :3030,

}

var app =express();

// server on port 
app.listen(env.PORT, ()=>{

    console.log (`Server Started on port :${env.PORT}`);
});

app.post( '/game', function (req, res, next ){
const numbers = [122,45,1,2,5,8,7,114,45,30];
    //const numbers = req.body.numbers;
    console.log ('>>>',req.body);
    return res.json (fizbuzzLogic(numbers));
});

// rest
app.get ('/multiply/:val1/:val2', function (req, res, next ){
    
    const x  = req.params.val1;
    const y  = req.params.val2;
    console.log ('>>>',req.params);
    /*
     multiply(x,y).then((result)=>{ 
         if ( result ) {
              return res.json(result);
         }else{    
             return res.status(404).end();
         }
        });*/
    return res.json(multiply(x,y));
});


// get server status 
app.get ('/server-status',function(req, res){
    res.send('Server is runnig ... Fizz Buzzz Game');

});

