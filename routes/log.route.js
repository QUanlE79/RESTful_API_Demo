import express from 'express';
import fs from 'fs';
import path from 'path';
import { processLogFiles } from '../utils/LoadLoggingFile.js';
const router = express.Router();


router.get('/', async (req, res) => {
    const logs = await processLogFiles('./logs')
    console.log(logs);
    res.json( logs );
});

router.get('/filter', async (req, res) => {
    const logs = await processLogFiles('./logs')
    console.log(logs);
    res.json( logs );
});


export default router;
