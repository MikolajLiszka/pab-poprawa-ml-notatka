import express, { Router } from 'express'
import { Request, Response } from 'express'
const route = express.Router();
const tagActions = require('../Actions/Tag-action');

route.get('/tags', tagActions.getAllTags);

route.get('/tags/:id', tagActions.getTag);

route.post('/tags', tagActions.saveTag);

route.get('/tags/:id', tagActions.updateTag);

route.get('/tags/:id', tagActions.deleteTag);

module.exports = route;