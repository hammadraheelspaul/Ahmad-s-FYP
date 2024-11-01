const Project = require('../models/project');

exports.createProject = async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.status(201).send(project);
};

exports.getProjects = async (req, res) => {
  const projects = await Project.find();
  res.send(projects);
};

exports.getProject = async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) return res.status(404).send('Project not found');
  res.send(project);
};

exports.updateProject = async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!project) return res.status(404).send('Project not found');
  res.send(project);
};

exports.deleteProject = async (req, res) => {
  const project = await Project.findByIdAndDelete(req.params.id);
  if (!project) return res.status(404).send('Project not found');
  res.status(204).send();
};


exports.getProjectRewards = async (req, res) => {
  const rewards = await Reward.find({ project: req.params.projectId });
  if (!rewards) return res.status(404).send('No rewards found for this project');
  res.send(rewards);
};