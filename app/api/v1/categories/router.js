// import router dari express
const express = require('express');
const router = express();
// import product controller
const { create, index, find, update, destroy } = require('./controller');
const {
  authenticateUser,
  authorizeRoles,
} = require('../../../middlewares/auth');

router.get('/categories', authenticateUser, authorizeRoles('organizer'), index);
router.get('/categories/:id', authenticateUser, find);
router.delete('/categories/:id', authenticateUser, destroy);
router.put('/categories/:id', authenticateUser, update);
// pasangkan route endpoint dengan method `create`
router.post('/categories', authenticateUser, create);
// export router
module.exports = router;
