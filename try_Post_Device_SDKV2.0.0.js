import { CommunityStr, Device } from 'meerkat_automation_apis';
import { DeviceApi } from 'meerkat_automation_apis';
import { SNMPCollector } from 'meerkat_automation_apis';
import { Province } from 'meerkat_automation_apis';
import { Vendor } from 'meerkat_automation_apis';
import { DeviceType } from 'meerkat_automation_apis';
//import {KPIStats} from 'meerkat_automation_apis';
import { MonObj } from 'meerkat_automation_apis';
import { SNMPMIB } from 'meerkat_automation_apis';
import { Metric } from 'meerkat_automation_apis';

const api = new DeviceApi();

var opts = {
  body: new Device(), // {CollectorVM} Inventory item to add
};

// The following object properties assignment are required when you use the local Node.JS server stup if you use swaagger mocking it's not needed
opts.body.id = 1;
opts.body.name = 'VANCBCBR01';
opts.body.ip = '154.11.169.53';
//opts.body.province = new Province();
//opts.body.vendor = new Vendor();
opts.body.sNMPCollector = new SNMPCollector();
//opts.body.deviceType = new DeviceType();
//opts.body.kPIStats = new KPIStats();
//opts.body.communityStr = new CommunityStr();
//opts.body.sNMPCollector.kPIStats = opts.body.kPIStats;
//opts.body.sNMPCollector.communityStr = opts.body.communityStr;
//opts.body.monObj = [new MonObj()];
//opts.body.monObj[0].sNMPMIB = new SNMPMIB();
//opts.body.monObj[0].metric = [new Metric()];
//opts.body.monObj[0].metric[0].sNMPMIB = opts.body.monObj[0].sNMPMIB;

var callback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};

api.addDevice(opts, callback);
