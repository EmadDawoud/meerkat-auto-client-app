const express = require('express');

const { check, validationResult } = require('express-validator');

const router = express.Router();

module.exports = (params) => {
  const { device } = params;
  const { deviceApi } = params;
  //initialize the device object and its associated objects

  //prepare the input for addDevice API/method
  var opts = {
    body: device, // {Device} Inventory item to add
  };

  // The following object properties assignment are required when you use the local Node.JS server stup if you use swaagger mocking it's not needed

  var addCallback = function (error, data, response) {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully.');
    }
  };
  //collectorVMApi.addCollectorVM(opts, callback);

  //const api = new DeviceApi();

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

  var deviceList = [{}];
  var searchCallback = function (error, data, response) {
    if (error) {
      console.log('ERROR HAPPENNED !!!!!!');
      console.error(error);
    } else {
      console.log('API called successfully.');
      deviceList = data;
      console.log(data);
      data.forEach(addMessage);
    }
  };

  const response = deviceApi.searchDevice(searchCallback);
  router.get('/', async (request, response, next) => {
    try {
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
      check('ip').trim().isIP().normalizeEmail().withMessage('A Valid IP is required'),
      check('province')
        .trim()
        .isLength({ min: 2 })
        .escape()
        .withMessage('A valid Province is required'),
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
        //console.log(request.body);
        opts.body.name = request.body.name;
        opts.body.ip = request.body.ip;
        //opts.body.province = request.body.province;
        //opts.body.communitystr = request.body.communitystr;
        await deviceApi.addDevice(opts, addCallback);

        request.session.feedback = {
          message: 'Thank you for your feedback',
        };
        return response.redirect('/device');
        //return response.send(request.body);
      } catch (err) {
        return next(err);
      }
    }
  );

  return router;
};
