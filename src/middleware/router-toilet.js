import {Router} from 'express'
import createError from 'http-errors'
import parserBody from './parser-body.js'
import Toilet from '../model/toilet.js'
import {bearerAuth} from './parser-auth.js'

export default new Router()
.post('/toilets', bearerAuth, parserBody, (req, res, next) => {
  Toilet.create(req)
  .then(res.json)
  .catch(next)
})
.get('/toilets', (req, res, next) => {
  Toilet.fetch(req)
  .then(res.page)
  .catch(next)
})