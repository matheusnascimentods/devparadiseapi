const router = require('express').Router();
const { body } = require('express-validator');

const controller = require('../controllers/ConnectionController');
const verifyToken = require('../helpers/check-token');
const checkBody = require('../helpers/check-body');

//GET
router.get("/status", verifyToken, controller.followStatus);

router.get("/:username/followers", verifyToken, controller.followers);

router.get("/:username/following", verifyToken, controller.following);

//POST
router.post('/follow', [
    body('followedId').notEmpty(),
], checkBody, verifyToken, controller.follow);

//DELETE
router.delete('/unfollow', [
    body('followedId').notEmpty(),
], checkBody, verifyToken, controller.unfollow);

module.exports = router;