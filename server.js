//const { CollectorVMApi } = import('meerkat_automation_apis');
//const { CollectorVM } = import('meerkat_automation_apis');
//const api = new CollectorVMApi();

// commonjsScript.js
/*



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

    var returnObjects = {
      collectorVMApi: new CollectorVMApi(),
      collectorVM: new CollectorVM(),
      province: new Province(),
      communityStr: new CommunityStr(),
      device: new Device(),
      deviceApi: new DeviceApi(),
      sNMPCollector: new SNMPCollector(),
      vendor: new Vendor(),
      deviceType: new DeviceType(),
      kPIStats: new KPIStats(),
      monObj: new MonObj(),
      sNMPMIB: new SNMPMIB(),
      metric: new Metric(),
    };
    return returnObjects;
  } catch (error) {
    console.error('Dynamic import error:', error);
  }
}

// Call the async function
const apiObjects = useDynamicImport();
{device} = apiObjects;
{deviceApi} = apiObjects;
*/

const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const { device } = require('./apiFrontend');
const { deviceApi } = require('./apiFrontend');
const routes = require('./routes');
const FeedbackService = require('./services/FeedbackService');
const SpeakersService = require('./services/SpeakerService');

const feedbackService = new FeedbackService('./data/feedback.json');
const speakersService = new SpeakersService('./data/speakers.json');
//const device = new Device();
//const deviceApi = new DeviceApi();
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
    //apiObjects,
    deviceApi,
    device,
  })
);

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});
