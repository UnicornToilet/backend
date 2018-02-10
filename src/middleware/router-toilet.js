import {Router} from 'express';
import createError from 'http-errors';
import parserBody from './parser-body.js';
import Toilet from '../model/toilet.js';
import {bearerAuth} from './parser-auth.js';

export default new Router()
//TODO:re-add bearerAuth

  .post('/addToilet', parserBody, (req, res, next) => {
    Toilet.create(req.body)
      .then(toilet => res.send(toilet))
      .catch(next);
  })

  .post('/toilet', parserBody, (req, res, next) => {
    const { overallQuality, tpQuality, occupancy, soap, drying, babyChanging } = req.body;
    const query = Toilet.find();
    if (overallQuality) {
      query.where('overallQuality').gte(overallQuality);
    }
    if (tpQuality) {
      query.where('tpQuality').gte(tpQuality);
    }
    if (occupancy) {
      query.where('occupancy').equals(occupancy);
    }
    if (soap) {
      query.where('soap').equals(soap);
    }
    if (drying) {
      query.where('drying').equals(drying);
    }
    if (babyChanging) {
      query.where('babyChanging').equals(babyChanging);
    }
    query.exec((err, toilets) => {
      res.send(toilets);
    });
  })

  .get('/toilet', (req, res, next) => {
    Toilet.find()
      .then(toilets => res.send(toilets))
      .catch(next);
  });
