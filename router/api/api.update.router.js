const router = require('express').Router();
const { Drug } = require('../../db/models');
const DrugItems = require('../../components/DrugItems');

router.put('/:drugId', async (req, res) => {
  try {
    const { drugId } = req.params;
    const { name, price, img } = req.body;
    const [result] = await Drug.update(
      { name, price, img },
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
    const { name, price, salePrice, img } = req.body;

    const drug = await Drug.create({
      name,
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
