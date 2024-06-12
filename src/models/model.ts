import mongoose, { Document, Schema } from "mongoose";

interface ITask extends Document {
  amharicTitle: String;
  EnglishTitle: String;
  releaseYear: Number;
  rating: Number;
  duration: String;
  genre: String;
  src: String;
  image: String;
  isSlider: boolean;
  trend: boolean;
}

const ModelSchema: Schema = new Schema({
  amharicTitle: {
    type: String,
    required: [true, "must provide task amharicTitle"],
    trim: true,
  },
  EnglishTitle: {
    type: String,
    required: [true, "must provide task EnglishTitle"],
    trim: true,
  },
  releaseYear: {
    type: Number,
    required: [true, "must provide task releaseYear"],
    trim: true,
  },
  rating: {
    type: Number,
    required: [true, "must provide task rating"],
    trim: true,
  },
  duration: {
    type: String,
    required: [true, "must provide task name"],
    trim: true,
  },
  genre: {
    type: String,
    required: [true, "must provide task genre"],
    trim: true,
  },
  src: {
    type: String,
    required: [true, "must provide task src"],
    trim: true,
  },
  image: {
    type: String,
    required: [true, "must provide task image"],
    trim: true,
  },
  isSlider: {
    type: Boolean,
    required: [true, "must provide task isSlider"],
  },
  trend: {
    type: Boolean,
    required: [true, "must provide task trend"],
  },
});

const MovieModel = mongoose.model<ITask>("Movie", ModelSchema);

export default MovieModel;
