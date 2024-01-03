import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
  username:{
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true, //best practice for text search
  },
  email:{
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  fullname:{
    type: String,
    required: true,
    trim: true,
    index: true, //best practice for text search
  },
  avater:{
    type: String, //collect from cloudinary
    required: true,
  },
  coverImage:{
    type: String, //collect from cloudinary
  },
  watchHistory: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Video',
    },
  ],
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  refreshToken:{
    type: String,
  },
}, { timestamps: true});

export const User = mongoose.model('User', userSchema);