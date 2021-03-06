import Mongoose, {Schema} from 'mongoose';

const toiletSchema = new Schema ({
  locationName: String,
  location: Schema.Types.Mixed,
  overallQuality: Number,
  tpQuality: Number,
  soap: String,
  drying: String,
});

const Toilet = Mongoose.model('toilet', toiletSchema);

export default Toilet;
