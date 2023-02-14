import express from 'express';
import { createUserHandler } from '../controller/user.controller';
import validateResource from '../middlewear/validateResource';
import { createUserSchema } from '../schema/user.schema';

const router = express.Router();

router.post('/api/users', validateResource(createUserSchema))

export default router;