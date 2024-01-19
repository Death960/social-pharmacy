const router = require('express').Router();
const { Drug } = require('../../db/models');

const FormUpdatePage = require('../../components/FormUpdatePage');

router.get('/:drugId', async (req, res) => {
  try {
    const { drugId } = req.params;
    const drug = await Drug.findOne({ where: { id: drugId } });
    const html = res.renderComponent(FormUpdatePage, {
      title: ' Update drug page',
      drug,
    });

    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
