const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  noOfMovie: {
    type: Number,
  },
  watchList: {
    type: Array,
    default: [],
  },
  watchListName: {
    type: Array,
    default: [],
  },
  watchListPoster: {
    type: Array,
    default: [],
  },
<<<<<<< HEAD
=======
  watchedList: {
    type: Array,
    default: [],
  },
  watchedListName: {
    type: Array,
    default: [],
  },
  watchedListPoster: {
    type: Array,
    default: [],
  },
>>>>>>> parent of 1d059cc... error
  favList: {
    type: Array,
    default: [],
  },
  favListName: {
    type: Array,
    default: [],
  },
  favListPoster: {
    type: Array,
    default: [],
  },
});
module.exports = mongoose.model("user", userSchema);
