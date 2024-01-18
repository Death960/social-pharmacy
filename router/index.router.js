const router = require('express').Router();

const mainDrugPage = require('./views/mainDrug.router');
const updateFormPage = require('../router/views/formUpdate.router')

const apiUpdateForm = require('../router/api/api.update.router')

router.use('/', mainDrugPage);
router.use('/update', updateFormPage)

router.use('/api/update', apiUpdateForm)

module.exports = router;
