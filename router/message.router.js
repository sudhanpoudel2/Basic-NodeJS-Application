import { Router } from "express";   

const router = Router();

router.route('/message').get().put().post().delete();

export default router;