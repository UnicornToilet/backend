import * as _ from 'ramda'
import * as util from '../lib/util.js'
import createError from 'http-errors'
import Mongoose, {Schema} from 'mongoose'

const toiletScheama = new Schema ({
  overallQuality: {type: Number},
  tpQuality: {type: Number},
  genderNeutral: {type: Boolean},
  occupancy: {type: Boolean},
  soap: {type: String},
  dryingMethod: {type: Boolean},
  babyChanging: {type: Boolean},
})

const Toilet = Mongoose.model('toilet', toiletScheama);

export default Toilet
