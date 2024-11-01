const mongoose = require('mongoose');
const { Schema } = mongoose;

const RewardSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  project: { type: Schema.Types.ObjectId, ref: 'Project' },
  picture: { type: String }, 
  availability: { 
    from: { type: Date, required: true },
    to: { type: Date, required: true }
  },
  limitedQuantity: { type: Number }, 
});

module.exports = mongoose.model('Reward', RewardSchema);