const Reward = require('../models/rewards');

exports.createReward = async (req, res) => {
  const reward = new Reward(req.body);
  await reward.save();
  res.status(201).send(reward);
};

exports.getRewards = async (req, res) => {
  const rewards = await Reward.find();
  res.send(rewards);
};

exports.getReward = async (req, res) => {
  const reward = await Reward.findById(req.params.id);
  if (!reward) return res.status(404).send('Reward not found');
  res.send(reward);
};

exports.updateReward = async (req, res) => {
  const reward = await Reward.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!reward) return res.status(404).send('Reward not found');
  res.send(reward);
};

exports.deleteReward = async (req, res) => {
  const reward = await Reward.findByIdAndDelete(req.params.id);
  if (!reward) return res.status(404).send('Reward not found');
  res.status(204).send();
};

exports.getProjectRewards = async (req, res) => {
  const rewards = await Reward.find({ project: req.params.projectId });
  if (!rewards) return res.status(404).send('No rewards found for this project');
  res.send(rewards);
};