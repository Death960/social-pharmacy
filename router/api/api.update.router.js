const router = require('express').Router();
const { Drug } = require('../../db/models');
const DrugItems = require('../../components/DrugItems');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

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
router.post('/', upload.single('img'), async (req, res) => {
  console.log('11111111111111');
  try {
    const { name, description, price, salePrice } = req.body;
    const newFileUrl = `/images/${req.file.originalname}`;

    const drug = await Drug.create({
      name,
      description,
      price,
      salePrice,
      img: newFileUrl,
      user_id: res.locals.user.id,
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
