const router = require('express').Router();
const { User } = require('../../db/models');

const UserPage = require('../../components/UserPage');

router.get('/', async (req, res) => {
  try {

    const {id}= res.locals.user
    const user = await User.findOne({where:{id:id} });


    const html = res.renderComponent(UserPage, {
      title: 'User Page',
      user,
    });

    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
