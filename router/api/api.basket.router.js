const router = require("express").Router();
const { OrderItem } = require("../../db/models");
const { Order,Drug } = require("../../db/models");

router.post("/", async (req, res) => {
  const { id } = req.body;
  const user = res.locals.user
  let order = await Order.findOne({where:{user_id:user.id,status:"Заказ создан"}})
  if(!order){
   order = await Order.create({
      user_id: res.locals.user.id,
      status: "Заказ создан",
      sum: 0,
    });
  }

  try {
    const drug = await Drug.findOne({where:{id}})
    if (order) {
      await OrderItem.create({ order_id: order.id, drug_id: id });
      order.sum+= drug.price
      order.save()
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
