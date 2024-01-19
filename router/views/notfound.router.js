const router = require("express").Router();
const PageNotFound = require('../../components/404Page');

router.get('/', (req, res) => {
  const html = res.renderComponent(PageNotFound, { title: 'Не найдено :(' });
  res.send(html);
});

module.exports = router