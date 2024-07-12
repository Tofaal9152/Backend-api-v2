import express from 'express'
import { all_GET, all_id_POST, all_id_id_DELETE, all_id_id_GET, all_id_id_PUT } from '../controllers/user.js'

const router = express.Router()

router.get('/all', all_GET)
router.post('/id', all_id_POST)

router.route('/id/:id').get(all_id_id_GET).put(all_id_id_PUT).delete(all_id_id_DELETE)


export default router