import {Router} from 'express'
import createError from 'http-errors'
import parserBody from './parser-body.js'
import Toilet from '../model/toilet.js'
import {bearerAuth} from './parser-auth.js'

export default new Router()
.post('/addToilet', bearerAuth, parserBody, (req, res, next) => {
  Toilet.create(req.body)
  .then(res.json)
  .catch(next)
})
// .post('/findtoilets', parserBody, (req, res, next) => {
//   let pref = req.body;
//   console.log(pref);
//   Toilet.find()
//   .then(toilets => {
//     const filtered = toilets.filter(t => {
//       return (t.overallQuality >= pref.overallQuality ) & (t.tpQuality >= pref.overallQuality) & (t.genderNeutral === pref.genderNeutral) & (t.occupancy === pref.occupancy) & (t.soap === pref.soap) & (t.dryingMethod === pref.dryingMethod) & (t.babyChanging === pref.babyChanging)
//     })
//   })
//   .catch(next)
// })
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
  .catch(next)
})
.get('/toilet', parserBody, (req, res, next) => {
  Toilet.find()
  .then(res.page)
  .catch(next)
})

