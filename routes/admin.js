var express = require('express');
var router = express.Router();
const db = require('../models/index.js');

/* GET admin workflow components */
router.get('/workflow_components', async function(req, res, next) {
  const workflowComponents = await db.WorkflowComponent.findAll();
  res.json({workflow_components: workflowComponents})
});

/* POST admin workflow components */
router.post('/workflow_components/', async function(req, res, next) {
  if(!req.body || !req.body.name || !req.body.sort_index) {
    res.status(400).json({error: 'Missing required fields.'})
    return
  }
  const component = await db.WorkflowComponent.findOne({ where: { name: req.body.name } });
  component.sort_index = req.body.sort_index;
  await component.save();
  res.json({success: true});
});

module.exports = router;
