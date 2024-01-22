const express = require('express');
const deviceRoute = require('./device');
const SNMPCollectorRoute = require('./snmpcollector');
const CollectorVMRoute = require('./collectorvm');

const router = express.Router();

module.exports = (params) => {
  //const { speakersService } = params;
  router.get('/', async (request, response, next) => {
    /*
    if (!request.session.visitcount) {
      request.session.visitcount = 0;
    }

    request.session.visitcount += 1;
    console.log(`visits: ${request.session.visitcount}`);
  */
    //response.send('Hello Express :)');
    //response.sendFile(path.join(__dirname, './static/index.html'));
    //response.render('pages/index', { pageTitle: 'Welcome' });
    try {
      //const topSpeakers = await speakersService.getList();
      //const artwork = await speakersService.getAllArtwork();
      response.render('layout', { pageTitle: 'Welcome', template: 'index' });
    } catch (err) {
      return next(err);
    }
  });

  router.use('/device', deviceRoute(params));
  router.use('/SNMPCollector', SNMPCollectorRoute(params));
  router.use('/CollectorVM', CollectorVMRoute(params));

  return router;
};
