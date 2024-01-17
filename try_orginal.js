var MeerkatAutomationApis = require('meerkat_automation_apis');

var api = new MeerkatAutomationApis.CollectorVMApi();
var opts = {
  body: new MeerkatAutomationApis.CollectorVM(), // {CollectorVM} Inventory item to add
};

opts.body.id = 1;
opts.body.name = 'abenpscol01';
opts.body.ip = '154.11.169.53';
opts.body.province = new MeerkatAutomationApis.Province();

var callback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addCollectorVM(opts, callback);
