const router = require("express").Router();
const { OrderItem } = require("../../db/models");

router.post("/", async (req, res) => {
  try {
    const { id } = req.body;
    await OrderItem.create({ user_id: res.locals.user.id, drug_id: id });
    res.json({ message: "success" });
  } catch ({ message }) {
    res.json({ message });
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
    res.json({ message: "Не твоя вот ты и бесишься" });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
