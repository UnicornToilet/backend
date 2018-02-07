import User from './user.js'
import Profile from './profile.js'
import Photo from './photo.js'
import Toilet from './toilet.js'

export default (db) => {
  User(db)
  Profile(db)
  Photo(db)
  Toilet(db)
}
