import contactsRouter from './contacts.js';
import authRouter from './auth.js';
import express from 'express';


const router = express.Router();

router.use('/contacts', contactsRouter);
router.use('/auth', authRouter);

export default router;
