const express = require('express');
const projectController = require('../controllers/project');
const router = express.Router();

router.post('/projects', projectController.createProject);
router.get('/projects', projectController.getProjects);
router.get('/projects/:id', projectController.getProject);
router.put('/projects/:id', projectController.updateProject);
router.delete('/projects/:id', projectController.deleteProject);
router.post('/projects/:id/backThisProject', projectController.addBacker);

module.exports = router;



