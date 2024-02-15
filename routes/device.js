const express = require('express');

const { check, validationResult } = require('express-validator');

const router = express.Router();

module.exports = (params) => {
  //const { feedbackService } = params;
  const { device } = params;
  const { deviceApi } = params;
  //const { province } = params;
  //const { communityStr } = params;
  const { sNMPCollector } = params;
  //const { vendor } = params;
  //const { kPIStats } = params;
  //const { monObj } = params;
  //const { sNMPMIB } = params;
  //const { metric } = params;
  //const { deviceType } = params;
  //initialize the device object and its associated objects

  //device.province = province;
  //device.vendor = 'Juniper';
  device.sNMPCollector = sNMPCollector;
  //device.deviceType = deviceType;
  //device.kPIStats = kPIStats;
  //device.communityStr = communityStr;
  //device.sNMPCollector.kPIStats = device.kPIStats;
  //device.sNMPCollector.communityStr = device.communityStr;
  //device.monObj = [monObj];
  //device.monObj[0].sNMPMIB = sNMPMIB;
  //device.monObj[0].metric = [metric];
  //device.monObj[0].metric[0].sNMPMIB = device.monObj[0].sNMPMIB;

  var deviceList = [device];

  router.get('/', async (request, response, next) => {
    try {
      //prepare the input for addDevice API/method

      // The following object properties assignment are required when you use the local Node.JS server stup if you use swaagger mocking it's not needed

      //collectorVMApi.addCollectorVM(opts, callback);

      //const api = new DeviceApi();

      var searchCallback = function (error, data, response) {
        if (error) {
          console.error(error);
        } else {
          console.log('API called successfully.');
          deviceList = data;

          //console.log(deviceList);
          //return data;
        }
      };
      deviceApi.searchDevice(searchCallback);
      //console.log(deviceList);
      //const feedback = await feedbackService.getList();
      const errors = request.session.feedback ? request.session.feedback.errors : false;
      const successMsg = request.session.feedback ? request.session.feedback.message : false;
      request.session.feedback = {};
      return response.render('layout', {
        pageTitle: 'Device',
        template: 'device',
        deviceList,
        errors,
        successMsg,
      });

      //return response.json(feedback);
    } catch (err) {
      return next(err);
    }
  });

  router.post(
    '/',
    [
      check('name').trim().isLength({ min: 3 }).escape().withMessage('A Device Name is required'),
      check('ip').trim().isIP().withMessage('A Valid IP is required'),
      check('province')
        .trim()
        .isLength({ min: 2 })
        .escape()
        .withMessage('A valid Province is required'),
      check('vendor').trim().escape(),
      check('communitystr')
        .trim()
        .isLength({ min: 3 })
        .escape()
        .withMessage('A Community String is required'),
    ],
    async (request, response, next) => {
      try {
        const errors = validationResult(request);

        if (!errors.isEmpty()) {
          //console.log(errors);
          request.session.feedback = {
            errors: errors.array(),
          };
          return response.redirect('/device');
        }

        var opts = {
          body: device, // {Device} Inventory item to add
        };

        //console.log(request.body);
        opts.body.name = request.body.name;
        opts.body.ip = request.body.ip;
        opts.body.vendor = request.body.vendor;
        //opts.body.vendor = 'Juniper';
        opts.body.province = request.body.province;
        opts.body.devicetype = request.body.devicetype;
        opts.body.communitystr = request.body.communitystr;

        var addCallback = function (error, data, response) {
          if (error) {
            console.error(error);
          } else {
            console.log('POST API called successfully.');
          }
        };
        console.log(request.body.devicetype);
        console.log(device);
        deviceApi.addDevice(opts, addCallback);

        request.session.feedback = {
          message: 'Thank you for Adding the device',
        };
        return response.redirect('/device');
        //return response.send(request.body);
      } catch (err) {
        return next(err);
      }
    }
  );

  // Call the async function

  return router;
};
