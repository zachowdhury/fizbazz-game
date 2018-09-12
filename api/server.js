import express from 'express';
import bodyParser from  'body-parser';
var cors = require('cors');
import  fizbuzzLogic,{ multiply }  from './modules/Logic';

const env = {
    HOST : 'localhost',
    PORT :3030,

}

var app =express();
// cors
app.use ( cors({origin:"*"}));
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({
   extended: true,
   limit:'50mb'

}));
// Runserver on the host
if (env.PORT) {
  app.listen(env.PORT, (err) => {
    if (err) {
      console.error(err);
    }
    console.info('=====================\n==> 🌎  API is running on port %s', env.PORT);
    console.info('==> 💻  Send requests to http://%s:%s', env.HOST, env.PORT);
  });
} else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}

// routes @@
app.post( '/game', function (req, res, next ){
//const numbers = [122,45,1,2,5,8,7,114,45,30];
    const numbers = req.body.gameData;

    fizbuzzLogic(numbers).then ((result)=>{
        if (result){
            return res.json(result);
        }else{
            return res.status(404).end();
        } 
    });  
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

