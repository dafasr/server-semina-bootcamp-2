// import router dari express
const express = require('express');
const router = express();
// import product controller
const { create, index, find, update, destroy } = require('./controller');

router.get('/categories', index);

router.get('/categories/:id', find);

router.delete('/categories/:id', destroy);

router.put('/categories/:id', update);

// pasangkan route endpoint dengan method `create`
router.post('/categories', create);

// export router
module.exports = router;
