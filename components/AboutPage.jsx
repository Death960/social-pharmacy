const React = require('react');
const Layout = require('./Layout');

function AboutPage({ title, user }) {
  return (
    <Layout user={user} title={title}>
      <h1>О нас</h1>
      <p className='aboutText'>
        <b>Торговое объединение ЗАО "Баптека" начала свою историю в 1991 году в городе Санкт-Петербург, как маленькая аптека на углу улиц Рубенштейна и ещё четырёх каких-то улиц.</b>
        <b> На сегодняшний день Баптека - это всероссийская сеть классных таких аптек, у нас тут вообще всё круто.</b>
        <b> Ну в общем заходите, нормально всё будет. Всё удачи, небольшой расход!</b></p>
      <div className='yandexmap'>

        <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9df3b57b79ab10b88ec67349d2c7a473c24bdb3f19cc3013c31e6aeb183884d7&amp;width=100%25&amp;height=555&amp;lang=ru_RU&amp;scroll=true" />
      </div>
    </Layout>
  );
}

module.exports = AboutPage;