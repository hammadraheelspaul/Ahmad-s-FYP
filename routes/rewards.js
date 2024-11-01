const express = require('express');
const rewardController = require('../controllers/rewards');
const router = express.Router();

router.post('rewards/', rewardController.createReward);
router.get('rewards/', rewardController.getRewards);
router.get('rewards/:id', rewardController.getReward);
router.put('rewards/:id', rewardController.updateReward);
router.delete('rewards/:id', rewardController.deleteReward);
router.get('rewards/project/:projectId', rewardController.getProjectRewards);

module.exports = router;