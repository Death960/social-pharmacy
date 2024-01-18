const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const configJWT = require('../../db/seeders/middleware/configJWT');
const generateTokens = require('../../utils/authUtils');

router.post('/sign-in', async (req, res) => {
  let user;
  try {
    // достаем данные из запроса клиента в req.body
    const { name, password } = req.body;
    // находим и вытаскиваем пользователя из базе
    user = await User.findOne({ where: { name } });
    if (!user) {
      res.json({ message: 'Такого пользователя нет или пароль неверен' });
      return;
    }
    const isSame = await bcrypt.compare(password, user.password);
    // сравниваем введенный пароль с паролем с базы
    if (!isSame) {
      res.json({ message: 'Такого пользователя нет или пароль неверен' });
      return;
    }
    const { accessToken, refreshToken } = generateTokens({
      user: { id: user.id, img: user.img, name: user.name },
    });
    //устанавливаем куки с access и refresh токенами
    res.cookie('access', accessToken, {
      maxAge: 1000 * 60 * 60 * 5,
      httpOnly: true,
    });
    res.cookie('refresh', refreshToken, {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    });
    res.json({ message: 'Success' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/sign-up', async (req, res) => {
  let user;
  try {
    // достаем данные из запроса клиента в req.body
    const { name, password, img } = req.body;
    // console.log(name, password, img);
    user = await User.findOne({ where: { name } });
    if (user) {
      res.json({ message: 'Такой пользователь уже существует' });
      return;
    }
    const hash = await bcrypt.hash(password, 10);
    // если пользователя нет создаем его в базе НЕ ЗАБЫВАЕМ AWAIT
    user = await User.create({ name, password: hash, img });

    // генерируем access и refresh токены
    const { accessToken, refreshToken } = generateTokens({
      user: { id: user.id, img: user.img, name: user.name },
    });
    //устанавливаем куки с access и refresh токенами
    res.cookie('access', accessToken, {
      maxAge: 1000 * 60 * 60 * 5,
      httpOnly: true,
    });
    res.cookie('refresh', refreshToken, {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    });

    res.json({ message: 'Success' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/logout', (req, res) => {
  res.clearCookie(configJWT.access.type).clearCookie(configJWT.refresh.type);
  res.redirect('/');
});

module.exports = router;
