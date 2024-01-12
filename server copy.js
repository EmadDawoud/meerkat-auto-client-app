//const { CollectorVMApi } = import('meerkat_automation_apis');
//const { CollectorVM } = import('meerkat_automation_apis');
//const api = new CollectorVMApi();

// commonjsScript.js
async function useDynamicImport() {
  try {
    const {
      CollectorVMApi,
      CollectorVM,
      Province,
      CommunityStr,
      Device,
      DeviceApi,
      SNMPCollector,
      Vendor,
      DeviceType,
      KPIStats,
      MonObj,
      SNMPMIB,
      Metric,
    } = await import('meerkat_automation_apis');

    const collectorVMApi = new CollectorVMApi();
    const collectorVM = new CollectorVM();
    const province = new Province();
    const communityStr = new CommunityStr();
    const device = new Device();
    const deviceApi = new DeviceApi();
    const sNMPCollector = new SNMPCollector();
    const vendor = new Vendor();
    const deviceType = new DeviceType();
    const kPIStats = new KPIStats();
    const monObj = new MonObj();
    const sNMPMIB = new SNMPMIB();
    const metric = new Metric();

    var opts = {
      body: collectorVM, // {CollectorVM} Inventory item to add
    };

    // The following object properties assignment are required when you use the local Node.JS server stup if you use swaagger mocking it's not needed
    opts.body.id = 1;
    opts.body.name = 'abenpscol01';
    opts.body.ip = '154.11.169.53';
    opts.body.province = province;

    var callback = function (error, data, response) {
      if (error) {
        console.error(error);
      } else {
        console.log('API called successfully.');
      }
    };
    collectorVMApi.addCollectorVM(opts, callback);

    const api = new CollectorVMApi();

    function addMessage(message) {
      console.log(
        'Parsing Each Object field IP= ' +
          message.ip +
          ' Name = ' +
          message.name +
          ' ID = ' +
          message.id
      );
      //console.log(message)
    }
    var callback = function (error, data, response) {
      if (error) {
        console.error(error);
      } else {
        console.log('API called successfully.');
        console.log(data);
        data.forEach(addMessage);
      }
    };
    var response = api.searchCollectorVM(callback);
  } catch (error) {
    console.error('Dynamic import error:', error);
  }
}

// Call the async function
useDynamicImport();

const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const routes = require('./routes');
const FeedbackService = require('./services/FeedbackService');
const SpeakersService = require('./services/SpeakerService');

const feedbackService = new FeedbackService('./data/feedback.json');
const speakersService = new SpeakersService('./data/speakers.json');

const app = express();

const port = 3000;

app.locals.siteName = 'ROUX Meetup';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(async (request, response, next) => {
  try {
    const names = await speakersService.getNames();
    response.locals.speakerNames = names;
    return next();
  } catch (err) {
    return next(err);
  }
});

app.use(express.static(path.join(__dirname, './static')));

/*

app.get('/speakers', (request, response) => {
  response.sendFile(path.join(__dirname, './static/speakers.html'));
});
*/

app.set('trust proxy', 1);

app.use(
  cookieSession({
    name: 'session',
    keys: ['hasfhlfkasdkl', 'jlasjk'],
  })
);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  '/',
  routes({
    feedbackService,
    speakersService,
  })
);

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});
