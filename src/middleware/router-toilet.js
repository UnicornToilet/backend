import {Router} from 'express';
import createError from 'http-errors';
import parserBody from './parser-body.js';
import Toilet from '../model/toilet.js';
import {bearerAuth} from './parser-auth.js';

export default new Router()
  .post('/addToilet', parserBody, (req, res, next) => {
    Toilet.create(req.body)
      .then(toilet => res.send(toilet))
      .catch(next);
  })

  .post('/toilet', parserBody, (req, res, next) => {
    Toilet.find()
      .where('overallQuality').gte(req.body.overallQuality)
      .where('tpQuality').gte(req.body.tpQuality)
      .where('genderNeutral').equals(req.body.tpQuality)
      .where('occupancy').equals(req.body.occupancy)
      .where('soap').equals(req.body.soap)
      .where('dryingMethod').equals(req.body.dryingMethod)
      .where('babyChanging').equals(req.body.babyChanging)
      .then(res.page)
      .catch(next);
  })
  
  .get('/toilet', (req, res, next) => {
    Toilet.find({})
      .then(toilets => res.send(toilets))
      .catch(next);
  });

