import mongoose, { Schema } from 'mongoose'
// we can do complex queries with mongoose using this plugin
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'

const videoSchema = new Schema({
  videoFile:{
    type: String, //collect from cloudinary
    required: true,
  },
  thumbnail:{
    type: String, //collect from cloudinary
    required: true,
  },
  title:{
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  duration:{
    type: Number,
    required: true,
  },
  views:{
    type: Number,
    default: 0,
  },
  isPublished:{
    type: Boolean,
    default: true,
  },
  owner:{
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
},{ timestamps: true});

videoSchema.plugin(mongooseAggregatePaginate);
export const Video = mongoose.model('Video', videoSchema);