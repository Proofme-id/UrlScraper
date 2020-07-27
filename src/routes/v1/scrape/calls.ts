import * as scraperController from '../../../controllers/scraperController';
import { Router } from 'express';

const router = Router();

router.get('/:url/:elementId', scraperController.scrapeUrl);

module.exports = router;