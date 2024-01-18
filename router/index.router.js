const router = require("express").Router();

const mainDrugPage = require('./views/mainDrug.router');
const updateFormPage = require('../router/views/formUpdate.router');
const authRouter= require('./views/auth.router')
const userRouter = require('./views/user.router')

const apiUpdateForm = require('../router/api/api.update.router');
const apiAddDrug = require('./api/api.update.router');
const apiDeleteRouter = require("./api/api.delete.router");
const apiAuthRouter = require('./api/api.auth.router')



router.use('/', mainDrugPage);
router.use('/update', updateFormPage);
router.use('/auth',authRouter)
router.use('/profil',userRouter)

router.use('/api/update', apiUpdateForm);
router.use('/api/add', apiAddDrug);
router.use("/api/delete", apiDeleteRouter);
router.use('/api/auth',apiAuthRouter)


module.exports = router;
