const User = require('../models/user');
// const { Order } = require('../models/order');
const { errorHandler } = require('../helpers/dbErrorHandler');
const Project = require('../models/project');

exports.userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User not found',
      });
    }
    req.profile = user;
    next();
  });
};

exports.read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};

exports.update = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { new: true },
    (err, user) => {
      if (err) {
        return res.status(400).json({
          error: 'You are not authorized to perform this action',
        });
      }
      user.hashed_password = undefined;
      user.salt = undefined;
      res.json(user);
    }
  );
};

exports.changePreferences = (req, res) => {
  const { coffeePreferences, brewingMethods, equipmentPreferences } = req.body;

  User.findByIdAndUpdate(
    req.profile._id,
    { $set: { coffeePreferences, brewingMethods, equipmentPreferences } },
    { new: true },
    (err, user) => {
      if (err) {
        return res.status(400).json({
          error: 'User not found',
        });
      }
      user.hashed_password = undefined;
      user.salt = undefined;
      res.json(user);
    }
  );
};

exports.likeProject = async (req, res) => {
  const user = await User.findById(req.params.userId);
  const project = await Project.findById(req.params.projectId);

  if (!user || !project) {
    return res.status(404).send('User or Project not found');
  }

  user.likedProjects.push(project._id);
  project.likedBy.push(user._id);

  await user.save();
  await project.save();

  res.status(200).send({ user, project });
};

exports.addComment = async (req, res) => {
  const project = await Project.findById(req.params.projectId);

  if (!project) {
    return res.status(404).send('Project not found');
  }

  project.comments.push({
    user: req.body.userId,
    content: req.body.content,
  });

  await project.save();

  res.status(200).send(project);
};

exports.backProject = async (req, res) => {
  const user = await User.findById(req.params.userId);
  const project = await Project.findById(req.params.projectId);

  if (!user || !project) {
    return res.status(404).send('User or Project not found');
  }

  const amount = req.body.amount;

  user.backedProjects.push({ project: project._id, amount });
  project.backers.push({ user: user._id, amount });

  await user.save();
  await project.save();

  res.status(200).send({ user, project });
};

exports.requestReset = async (req, res) =>{
  
  const userId = req.body.userId;
  console.log(userId);
  if(!userId){
    return res.status(400).send('Bad Request');
  }
  const user = await User.findOne({email: userId});
  if(!user){
    return res.status(403).send("Invalid email");
  }
  return res.status(200).send("Permission Granted");
}

exports.resetPassword = async (req, res) =>{
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Set and encrypt the new password
    user.password = password;  // This triggers the virtual field 'password' setter and hashes the password

    // Save the updated user
    await user.save();

    res.json({ message: 'Password has been reset successfully' });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ error: 'An error occurred while resetting the password' });
  }
  
}