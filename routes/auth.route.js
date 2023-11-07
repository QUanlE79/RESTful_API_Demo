import express from 'express';
import staffModel from '../models/staff.model.js';
const router = express.Router();
import bcrypt from 'bcrypt'

router.post('/login', async (req, res) => {
    try{
        const {username,password}=req.body
        const dbUser = await staffModel.findByUserName(username)
        if (!dbUser) {
            return res.status(400).json({ error: 'Username not exists' });
        }
        
        const isMatchPassword= await bcrypt.compare(password,dbUser.password)
        console.log(isMatchPassword);
        if(isMatchPassword){
            return res.status(200).json({ message: 'Login successful' });
        } else {
          // Passwords do not match, authentication failed
          return res.status(401).json({ error: 'Invalid credentials' });
        }
    }catch(error){
        console.error('Error Login:', error);
        return res.status(500).json({ error: 'Internal Server Error' }); 
    }
    
});
router.post('/signup', async (req, res) => {
    try{
        const {username,password}=req.body
        const existingUser = await staffModel.findByUserName(username)
        if (existingUser) {
            return res.status(400).json({ error: 'Username already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);
        req.body.password=hashedPassword
        console.log(req.body);
        // Insert the new user into the database
        const result=await staffModel.add(req.body)
    
        return res.status(201).json({ message: 'User created successfully' });
    }
    catch(err){
        console.error('Error creating user:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
   
});

export default router;
