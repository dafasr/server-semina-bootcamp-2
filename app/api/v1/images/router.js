// import router dari express
const express = require('express');
const router = express();
// import product controller
const { create } = require('./controller');

// pasangkan route endpoint dengan method `create`
router.post('/categories', create);

// export router
module.exports = router;
