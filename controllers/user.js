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