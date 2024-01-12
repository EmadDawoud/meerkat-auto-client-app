import {CollectorVMApi} from 'meerkat_automation_apis';
import {CollectorVM} from 'meerkat_automation_apis';
import {Province} from 'meerkat_automation_apis';
//var CollectorVMApi = require('meerkat_automation_apis');
//var CollectorVM = require('meerkat_automation_apis');

const api = new CollectorVMApi()

var opts = { 
  'body': new CollectorVM() // {CollectorVM} Inventory item to add
};

// The following object properties assignment are required when you use the local Node.JS server stup if you use swaagger mocking it's not needed
opts.body.id = 1
opts.body.name = 'abenpscol01'
opts.body.ip = '154.11.169.53'
opts.body.province = new Province

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addCollectorVM(opts, callback);