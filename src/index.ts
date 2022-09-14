import express from 'express'
import {Request, Response} from 'express'
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';

const app = express()

app.use(express.json())

require('./db/db');

const noteRoute = require('./Routes/Note');

const tagRoute = require('./Routes/Tag');

app.use('/', noteRoute);

app.use('/', tagRoute);

app.listen(3001)