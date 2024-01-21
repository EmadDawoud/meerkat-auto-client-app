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
const MeerkatAutomationApis = require('meerkat_automation_apis');
const routes = require('./routes');
const FeedbackService = require('./services/FeedbackService');
const SpeakersService = require('./services/SpeakerService');

const feedbackService = new FeedbackService('./data/feedback.json');
const speakersService = new SpeakersService('./data/speakers.json');
const deviceApi = new MeerkatAutomationApis.DeviceApi();
const device = new MeerkatAutomationApis.Device();
const province = new MeerkatAutomationApis.Province();
const communityStr = new MeerkatAutomationApis.CommunityStr();
const sNMPCollector = new MeerkatAutomationApis.SNMPCollector();
const vendor = new MeerkatAutomationApis.Vendor();
const deviceType = new MeerkatAutomationApis.DeviceType();
const kPIStats = new MeerkatAutomationApis.KPIStats();
const monObj = new MeerkatAutomationApis.MonObj();
const sNMPMIB = new MeerkatAutomationApis.SNMPMIB();
const metric = new MeerkatAutomationApis.Metric();

const app = express();

const port = 3000;

app.locals.siteName = 'Meerkat Inventory';

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
    deviceApi,
    device,
    province,
    communityStr,
    sNMPCollector,
    vendor,
    deviceType,
    kPIStats,
    monObj,
    sNMPMIB,
    metric,
    deviceType,
  })
);

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});
