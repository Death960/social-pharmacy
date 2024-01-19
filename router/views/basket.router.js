const router = require("express").Router();
// const { Drug } = require("../../db/models");
const { OrderItem, Order, Drug } = require("../../db/models");

const BasketPage = require("../../components/BasketPage");

router.get("/", async (req, res) => {
  try {
    const order = await Order.findAll({
      where: { status: "Заказ создан" },
      include: { model: OrderItem, include: { model: Drug } },
    });
    console.log(order[0].OrderItems[0].Drug);
    const html = res.renderComponent(BasketPage, {
      title: "Корзина",
      order,
    });
    res.send(html);
  } catch ({ message }) {
    res.json({ message: "view basket router" });
  }
});

module.exports = router;

// const router = require('express').Router();
// const Basket = require('../../components/Basket');
// const { Order, OrderItem, Drug } = require('../../db/models');

// router.get('/', async (req, res) => {
//   const order = await Order.findAll({
//     where: { status: 'не оплачен' },
//     include: { model: OrderItem, include: { model: Drug } },
//   });
//   const html = res.renderComponent(Basket, {
//     title: 'Basket',
//     order,
//   });
//   res.send(html);
// });
// module.exports = router;
