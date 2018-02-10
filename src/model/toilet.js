import Mongoose, {Schema} from 'mongoose';

const toiletSchema = new Schema ({
  locationName: String,
  location: Schema.Types.Mixed,
  overallQuality: Number,
  tpQuality: Number,
  occupancy: String,
  soap: String,
  drying: String,
  babyChanging: String,
});

const Toilet = Mongoose.model('toilet', toiletSchema);

export default Toilet;
