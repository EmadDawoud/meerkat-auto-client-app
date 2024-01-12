const express = require('express');
const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');
const deviceRoute = require('./device');

const router = express.Router();

module.exports = (params) => {
  const { speakersService } = params;
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
      const topSpeakers = await speakersService.getList();
      const artwork = await speakersService.getAllArtwork();
      response.render('layout', { pageTitle: 'Welcome', template: 'index', topSpeakers, artwork });
    } catch (err) {
      return next(err);
    }
  });

  router.use('/speakers', speakersRoute(params));
  router.use('/feedback', feedbackRoute(params));
  router.use('/device', deviceRoute(params));

  return router;
};
