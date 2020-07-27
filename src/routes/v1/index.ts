import { Router } from "express";

const router = Router();

router.use('/scrape', require(__dirname + '/scrape/calls'));
 
module.exports = router;