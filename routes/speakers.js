const express = require('express');

const router = express.Router();
const cookieSession = require('cookie-session');

module.exports = (params) => {
  const { speakersService } = params;
  router.get('/', async (request, response, next) => {
    try {
      const speakers = await speakersService.getList();
      const artwork = await speakersService.getAllArtwork();
      return response.render('layout', {
        pageTitle: 'Speakers',
        template: 'speakers',
        speakers,
        artwork,
      });
      //return response.json(speakers);
    } catch (err) {
      return next(err);
    }
  });

  router.get('/:shortname', async (request, response, next) => {
    try {
      const speaker = await speakersService.getSpeaker(request.params.shortname);
      const artwork = await speakersService.getArtworkForSpeaker(request.params.shortname);
      return response.render('layout', {
        pageTitle: 'Speaker',
        template: 'speaker-details',
        speaker,
        artwork,
      });
    } catch (err) {
      return next(err);
    }

    // return response.send(`Detail Page of  ${request.params.shortname}`);
  });

  return router;
};
