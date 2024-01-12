const express = require('express');

const { check, validationResult } = require('express-validator');

const router = express.Router();

module.exports = (params) => {
  const { feedbackService } = params;
  router.get('/', async (request, response, next) => {
    try {
      const feedback = await feedbackService.getList();
      const errors = request.session.feedback ? request.session.feedback.errors : false;
      const successMsg = request.session.feedback ? request.session.feedback.message : false;
      request.session.feedback = {};
      return response.render('layout', {
        pageTitle: 'Feedback',
        template: 'feedback',
        feedback,
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
      check('name').trim().isLength({ min: 3 }).escape().withMessage('A Name is required'),
      check('email').trim().isEmail().normalizeEmail().withMessage('A Valid email is required'),
      check('title').trim().isLength({ min: 3 }).escape().withMessage('A Title is required'),
      check('message').trim().isLength({ min: 5 }).escape().withMessage('A Message is required'),
    ],
    async (request, response) => {
      const errors = validationResult(request);

      if (!errors.isEmpty()) {
        //console.log(errors);
        request.session.feedback = {
          errors: errors.array(),
        };
        return response.redirect('/feedback');
      }
      //console.log(request.body);
      const { name, email, title, message } = request.body;
      await feedbackService.addEntry(name, email, title, message);
      request.session.feedback = {
        message: 'Thank you for your feedback',
      };
      return response.redirect('/feedback');
      //return response.send(request.body);
    }
  );

  return router;
};
