const router = require('express').Router();
const { Drug } = require('../../db/models');
const DrugItems = require('../../components/DrugItems');

router.put('/:drugId', async (req, res) => {
  try {
    const { drugId } = req.params;
    const { name, description, img, price, salePrice } = req.body;
    const [result] = await Drug.update(
      { name, description, img, price, salePrice },
      { where: { id: drugId } }
    );
    if (result > 0) {
      res.json({ message: 'Успешно' });
      return;
    }
    res.json({ message: 'Что-то пошло не так' });
  } catch ({ message }) {
    res.json({ message });
  }
});
router.post('/', async (req, res) => {
  try {
    const { name, description, price, salePrice, img } = req.body;

    const drug = await Drug.create({
      name,
      description,
      price,
      salePrice,
      img,
    });
    const html = res.renderComponent(DrugItems, { drug }, { doctype: false });
    res.json({
      message: 'success',
      html,
    });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
