const router = require("express").Router();

const mainDrugPage = require("./views/mainDrug.router");
const updateFormPage = require("../router/views/formUpdate.router");
const authRouter = require("./views/auth.router");
const BasketPage = require("./views/basket.router");

const apiUpdateForm = require("../router/api/api.update.router");
const apiAddDrug = require("./api/api.update.router");
const apiDeleteRouter = require("./api/api.delete.router");
const apiAuthRouter = require("./api/api.auth.router");
const apiBasketRouter = require("./api/api.basket.router");

router.use("/", mainDrugPage);
router.use("/update", updateFormPage);
router.use("/auth", authRouter);
router.use("/basket", BasketPage);

router.use("/api/update", apiUpdateForm);
router.use("/api/add", apiAddDrug);
router.use("/api/delete", apiDeleteRouter);
router.use("/api/auth", apiAuthRouter);
router.use("/api/addBasket", apiBasketRouter);

module.exports = router;
