const router = require('express').Router();
const AboutPage = require('../../components/AboutPage');

router.get('/', (req, res) => {
  const html = res.renderComponent(AboutPage, { title: 'О нас' });
  res.send(html);
});

module.exports = router