const router = require("express").Router();
const { OrderItem } = require("../../db/models");
const { Order } = require("../../db/models");

router.post("/", async (req, res) => {
  const { id } = req.body;
  console.log(id);
  await Order.create({
    user_id: res.locals.user.id,
    status: "Заказ создан",
    sum: 0,
  });
  try {
    if (Order) {
      await OrderItem.create({ order_id: 1, drug_id: id });
      res.json({ message: "success" });
    }
  } catch ({ message }) {
    res.json({ message: "basket route post" });
  }
});

router.delete("/:drugId", async (req, res) => {
  try {
    const { drugId } = req.params;
    const result = await OrderItem.destroy({
      where: { user_id: res.locals.user.id, drug_id: drugId },
    });
    if (result > 0) {
      res.json({ message: "success" });
      return;
    }
    res.json({ message: "basket route delete" });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
