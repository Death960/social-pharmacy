const router = require("express").Router();

const mainDrugPage = require("./views/mainDrug.router");

const apiMainRouter = require("./api/api.main.router");

router.use("/", mainDrugPage);

router.use("/api/main", apiMainRouter);

module.exports = router;
