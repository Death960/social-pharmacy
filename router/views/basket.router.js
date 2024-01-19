const router = require('express').Router();
const { OrderItem, Order, Drug } = require('../../db/models');

const BasketPage = require('../../components/BasketPage');

router.get('/', async (req, res) => {
  try {
    const user = res.locals.user;
    const order = await Order.findAll({
      where: { user_id: user.id, status: 'Заказ создан' },
      include: { model: OrderItem, include: { model: Drug } },
    });
    const html = res.renderComponent(BasketPage, {
      title: 'Корзина',
      order,
    });
    res.send(html);
  } catch ({ message }) {
    res.json({ message: 'view basket router' });
  }
});

module.exports = router;
