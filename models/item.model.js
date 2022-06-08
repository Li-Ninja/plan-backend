const mongoose = require('mongoose');

const collectionName = 'Item';
const itemSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
      trim: true
    },
    count: Number,
    updateAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    versionKey: false,
    collection: collectionName
  }
);

const Item = mongoose.model(collectionName, itemSchema);

module.exports = Item;
