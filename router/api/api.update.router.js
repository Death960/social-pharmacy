const router = require('express').Router();
const { Drug } = require('../../db/models');

router.put('/:drugId', async (req, res) => {
  try {
    const { drugId } = req.params;
    const { name, price, img } = req.body;
    const [result] = await Drug.update(
      { name, price, img },
      { where: { id: drugId } }
    )
    if (result > 0) {
      res.json({ message: 'Успешно' })
      return;
    }
    res.json({ message: 'Что-то пошло не так' })
  } catch ({ message }) {
    res.json({ message })
  }
})

module.exports = router;