import * as _ from 'ramda'
import * as util from '../lib/util.js'
import createError from 'http-errors'
import Mongoose, {Schema} from 'mongoose'

// const toiletScheama = new Schema({
//   toilet: {
//     overallQuality: Number,
//     tpQuality: Number,
//     genderNeutral: Boolean,
//     occupancy: Boolean,
//     soap: String,
//     dryingMethod: String,
//     babyChanging: String,
//     },
// });

const toiletSchema = new Schema ({
  overallQuality: {type: Number, required: true},
  tpQuality: {type: Number, required: true},
  genderNeutral: {type: Boolean, required: true},
  occupancy: {type: Boolean, required: true},
  soap: {type: String, required: true},
  dryingMethod: {type: String, required: true},
  babyChanging: {type: String, required: true},
})

const Toilet = Mongoose.model('toilet', toiletScheama);

export default Toilet
