import express from "express";
import user from './user.routes';

const router = express.Router();

router.get('/health', (req, res) => { res.sendStatus(200) });

router.use(user)


export default router;