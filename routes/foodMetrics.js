import { Router } from 'express';
import { getFoodMetricBySearch, getAllFoodMetrics, createFoodMetric } from '../controllers.js/foodMetrics.js';
const router = Router();

router.get( '/', getAllFoodMetrics );
router.get( '/:search', getFoodMetricBySearch );
router.post( '/', createFoodMetric );

export default router;