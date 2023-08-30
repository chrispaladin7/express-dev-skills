const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');

// All path starts with "/todos"

//GET /todos
router.get('/',skillsCtrl.index);

//GET /todos/:id (show Functionality)
router.get('/:id',skillsCtrl.show)

module.exports = router;
