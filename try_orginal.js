// commonjsScript.js
async function useDynamicImport() {
  try {
    const { CollectorVMApi } = await import('meerkat_automation_apis');
    const { CollectorVM } = await import('meerkat_automation_apis');
    const { Province } = await import('meerkat_automation_apis');
    const api = new CollectorVMApi();

    var opts = {
      body: new CollectorVM(), // {CollectorVM} Inventory item to add
    };

    // The following object properties assignment are required when you use the local Node.JS server stup if you use swaagger mocking it's not needed
    opts.body.id = 1;
    opts.body.name = 'abenpscol01';
    opts.body.ip = '154.11.169.53';
    opts.body.province = new Province();

    var callback = function (error, data, response) {
      if (error) {
        console.error(error);
      } else {
        console.log('API called successfully.');
      }
    };
    api.addCollectorVM(opts, callback);
  } catch (error) {
    console.error('Dynamic import error:', error);
  }
}

// Call the async function
useDynamicImport();
