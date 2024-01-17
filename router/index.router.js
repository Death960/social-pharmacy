const router = require('express').Router();

const mainDrugPage = require('./views/mainDrug.router');

router.use('/', mainDrugPage);

module.exports = router;
