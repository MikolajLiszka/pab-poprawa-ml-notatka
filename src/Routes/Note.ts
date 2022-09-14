import express, { Router } from 'express'
import { Request, Response } from 'express'
const route = express.Router();
const noteActions = require('../Actions/Note-action');

route.get('/notes', noteActions.getAllNotes);

route.get('/notes/:id', noteActions.getNote);

route.post('/notes', noteActions.saveNote);

route.get('/notes/:id', noteActions.updateNote);

route.get('/notes/:id', noteActions.deleteNote);

module.exports = route;