import express from 'express';
import * as controller from '../controller/bill';

import { asyncMiddleware } from '../../lib/middleware/async';

const router = express.Router();

router.get('/byhome', asyncMiddleware(controller.getBillByHome));
router.post('/', asyncMiddleware(controller.createBill));
router.get('/byuser', asyncMiddleware(controller.getBillByUser));
router.get('/shareplan', asyncMiddleware(controller.getSharePlans));
router.delete('', asyncMiddleware(controller.deleteBill));
router.put('', asyncMiddleware(controller.markAsResolved));


export default router;
