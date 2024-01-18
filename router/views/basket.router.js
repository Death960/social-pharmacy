const router = require("express").Router();
const { Drug } = require("../../db/models");

const BasketPage = require("../../components/BasketPage");

router.get("/basket", async (req, res) => {
  try {
    const drugs = await Drug.findAll();
    const html = res.renderComponent(BasketPage, {
      title: "Корзина",
      drugs,
    });
    res.send(html);
  } catch ({ message }) {
    res.json({ message: "view basket router" });
  }
});

module.exports = router;
