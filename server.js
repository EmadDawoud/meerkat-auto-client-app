const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const MeerkatAutomationApis = require('meerkat_automation_apis');
const routes = require('./routes');

const deviceApi = new MeerkatAutomationApis.DeviceApi();
const device = new MeerkatAutomationApis.Device();
const province = new MeerkatAutomationApis.Province();
const communityStr = new MeerkatAutomationApis.CommunityStr();
const sNMPCollector = new MeerkatAutomationApis.SNMPCollector();
const vendor = new MeerkatAutomationApis.Vendor();
const deviceType = new MeerkatAutomationApis.DeviceType();
//const kPIStats = new MeerkatAutomationApis.KPIStats();
const monObj = new MeerkatAutomationApis.MonObj();
const sNMPMIB = new MeerkatAutomationApis.SNMPMIB();
const metric = new MeerkatAutomationApis.Metric();

const app = express();

const port = 3000;

app.locals.siteName = 'Meerkat Inventory';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

/*
app.use(async (request, response, next) => {
  try {
    const names = await speakersService.getNames();
    response.locals.speakerNames = names;
    return next();
  } catch (err) {
    return next(err);
  }
});
*/

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
    deviceApi,
    device,
    province,
    communityStr,
    sNMPCollector,
    vendor,
    deviceType,
    //kPIStats,
    monObj,
    sNMPMIB,
    metric,
  })
);

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});
