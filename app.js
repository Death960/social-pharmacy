require('@babel/register'); // подключить бабел
const express = require('express'); // экспресс
const app = express(); // вызвал экспресс
const path = require('path'); // подключил путь
const cookieParser = require('cookie-parser');
require('dotenv').config()

const router = require('./router/index.router'); // подключил роутер !!
const ssr = require('./middleware/ssr'); // подключил мидл вар
const getUser = require('./middleware/getUser');
const { verifyAccessToken } = require('./middleware/verifyJWT');
const PORT = 3010; // выбрал порт

app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); // парсинг данных body!!!
app.use(express.json()); // парсинг файлов джсон!!!
app.use(express.static(path.join(__dirname, 'public'))); // подключил и указал путь для статических данных
app.use(ssr); // подключил рендер (мидлварку)
app.use(verifyAccessToken);
app.use(getUser);
app.use('/', router); // за юзал!!

// app.get('/', (req, res) => {
//   res.send('hello');
// });//проверил работу сервера/вспомнил сырой Get

app.listen(PORT, () => console.log(`You shall not pass on port ${PORT}`));
