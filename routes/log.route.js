import express from 'express';
import fs from 'fs';
import path from 'path';
import { processLogFiles } from '../utils/LoadLoggingFile.js';
const router = express.Router();


router.get('/', async (req, res) => {
    const logs = await processLogFiles('./logs')
    res.json( logs );
});

router.get('/filter', async (req, res) => {
    const logs = await processLogFiles('./logs')
    res.json( logs );
});

router.post('/', async (req,res,next) => {
    const log = req.body;
    console.log(log);
})


export default router;
