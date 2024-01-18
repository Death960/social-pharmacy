const router = require('express').Router();
const { Drug } = require('../../db/models');

const DrugPage = require('../../components/DragListPage');

router.get('/', async (req, res) => {
  try {
    const drugs = await Drug.findAll({ order: [['id', 'DESC']] });
    const html = res.renderComponent(DrugPage, {
      title: ' Drug Page',
      drugs,
    });

    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
