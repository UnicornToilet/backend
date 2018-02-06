import createError from 'http-errors'
import * as util from '../lib/util.js'
import Mongoose, {Schema} from 'mongoose'

const toiletScheama = new Schema({
  toilet: {
    overallQuality: Number,
    tpQuality: Number,
    genderNeutral: Boolean,
    occupancy: Boolean,
    soap: String,
    dryingMethod: String,
    babyChanging: String,
    },
})

const Toilet = Mongoose.model('toilet', toiletScheama)

Toilet.create = function (toilet) {
    let data = Object.assign({}, toilet) 
    return new Toilet(data).save()
  }

  return new Profile({
    owner: req.user._id,
    username: req.user.username, 
    email: req.user.email,
    bio: req.body.bio,
  })
  .save()
  .then(profile => {
    req.user.profile = profile._id
    return req.user.save()
    .then(() => profile)
  })
}

Profile.fetchAll = util.pagerCreate(Profile)

Profile.fetchOne = function(req){
  return Profile.findById(req.params.id)
  .then(profile => {
    if(!profile)
      throw createError(404, 'NOT FOUND ERROR: profile not found') 
    return profile
  })
}

export default Toilet
