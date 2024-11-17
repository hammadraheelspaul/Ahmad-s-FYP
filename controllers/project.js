const Project = require('../models/project');

exports.createProject = async (req, res) => {
  const { compaignProject, createdBy } = req.body;
  // console.log(compaignProject);

  const { title, tagline, imageUrl,
    location, country, category,
    neededAmount,
    tags, duration, endDate, perks, faqs, story } = compaignProject;

  // console.log(title, tagline, imageUrl,
  //   location, country, category,
  //   tags, duration, endDate, createdBy);

  const project = new Project({
    title, tagline, imageUrl,
    location, country, category,
    neededAmount,
    tags, duration, endDate, createdBy, projectDetails: { media: [], perks, FAQs: faqs, story }
  });
  // console.log(project);

  await project.save();

  res.status(201).send(project);
  // res.status(200).send();
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

exports.addBacker = async (req, res) => {
  const { id } = req.params; // Project ID
  const { userId, amount, paymentReceiptURL } = req.body;

  // Validate input
  if (!userId || !amount || amount <= 0 || !paymentReceiptURL) {
    return res.status(400).send({ error: "All fields are required and amount must be greater than 0." });
  }

  try {
    // Find the project
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).send({ error: "Project not found." });
    }

    // Add the backer
    project.backers.push({
      user: userId,
      amount,
      paymentRepiptURL: paymentReceiptURL,
      status: "pending", // Default status
    });

    // Save the project
    await project.save();

    res.status(201).send({ message: "Backer added successfully.", project });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "An error occurred while adding the backer." });
  }
};


exports.confirmBackerStatus = async (req, res) => {
  try {
    const { projectId, index } = req.params; // Get projectId and index from request parameters

    // Find the project by ID
    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    // Validate the index
    if (index < 0 || index >= project.backers.length) {
      return res.status(400).json({ error: 'Invalid backer index' });
    }

    // Update the status of the specified backer
    const backer = project.backers[index];
    if (backer.status === 'confirmed' || backer.status === 'declined') {
      return res.status(400).json({ error: 'Status not pending.' });
    }
    backer.status = 'confirmed';

    // Add the backer's amount to the collectedAmount
    project.collectedAmount = (project.collectedAmount || 0) + backer.amount;

    // Save the updated project
    await project.save();

    res.status(200).json({
      message: `Backer status updated to 'confirmed' and amount added to collectedAmount`,
      project,
    });
  } catch (error) {
    console.error('Error updating backer status:', error);
    res.status(500).json({ error: 'An error occurred while updating backer status' });
  }
};

exports.declineBackerStatus = async (req, res) => {
  try {
    const { projectId, index } = req.params; // Get projectId and index from request parameters

    // Find the project by ID
    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    // Validate the index
    if (index < 0 || index >= project.backers.length) {
      return res.status(400).json({ error: 'Invalid backer index' });
    }

    // Update the status of the specified backer
    const backer = project.backers[index];
    if (backer.status === 'confirmed' || backer.status === 'declined') {
      return res.status(400).json({ error: 'Status not pending.' });
    }
    backer.status = 'declined';

    // Save the updated project
    await project.save();

    res.status(200).json({
      message: `Backer status updated to 'confirmed' and amount added to collectedAmount`,
      project,
    });
  } catch (error) {
    console.error('Error updating backer status:', error);
    res.status(500).json({ error: 'An error occurred while updating backer status' });
  }
};
