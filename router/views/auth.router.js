const router = require('express').Router();
const SingInPage = require('../../components/SignInPage');
const SingUpPage = require('../../components/SignUpPage');

router.get('/sign-up', (req, res) => {
  const html = res.renderComponent(SingUpPage, { title: 'sign-up' });
//   console.log(html);
  res.send(html);
});
router.get('/sign-in', (req, res) => {
  const html = res.renderComponent(SingInPage, { title: 'sign-in' });
  res.send(html);
});

module.exports = router;
