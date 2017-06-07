/**
 * Created by acunningham on 06/06/17.
 */
var sync = require('fh-sync');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
var app = express();

var mongodbConnectionString = 'mongodb://127.0.0.1:27017/sync';
var redisUrl = 'redis://127.0.0.1:6379';

var id = "myShoppingList";


app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));


app.get ('/', function(req,res){
  res.send('Server is running');
});

// mongo options are an empty object {}
sync.api.connect(mongodbConnectionString, {}, redisUrl, function(err){
  if(err){
    console.log('Error at connect: '+ err);
  }else{
    console.log('Sync no error on startup');
    activateForDataset(id);
  }
});


app.post('/sync/:id',function(req, res){
  var dataset_id = req.params.id;
  var params = req.body;
  // var params = {
  //   fn: 'sync',
  //   dataset_id: id
  // };

  sync.api.invoke(dataset_id, params, function (err, result){
    if(err){
      console.log('Error at invoke: '+err)
      return res.status(500).json(err);
    }
    return res.json(result);
  });
});

function activateForDataset(id){
  //???? sync documentation I think
  var option = {
    syncFrequency: 10,//seconds
    logLevel:'info'
  };
  sync.api.init(id, option, function(err){
    if(err){
      console.log('Error at init: '+err);
    }else{
      //read api docs to figure out what is happening here???
      sync.api.handleList(id, function(id, params, value ,meta_data){
        console.log('something should be here but I know not what?')
      });
    }
  });
}

sync.api.getEventEmitter().on('sync:ready', function() {
  console.log('sync ready');

  sync.api.init('myDataset', {
    syncFrequency: 10 // seconds
  }, function() {});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});