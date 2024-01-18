const React = require('react');

function NavBar({ user }) {
  return (
    <div id='navbar'>
      <div className="head_item">
        <a href="/" className="logo"><img src="/images/logo.png" /></a>
      </div>
      <div className="head_item" id="regions">
        <div className="city_select">
          <select class="city-list">
            <option>Выберите город</option>
            <option data-class="city">Москва</option>
            <option data-class="city">Санкт-Петербург</option>
            <option data-class="city">Новосибирск</option>
            <option data-class="city">Екатеринбург</option>
            <option data-class="city">Казань</option>
            <option data-class="city">Уфа</option>
            <option data-class="city">Нижний Новгород</option>
            <option data-class="city">Владивосток</option>
            <option data-class="city">Тюмень</option>
            <option data-class="city">Самара</option>
          </select>
        </div>
      </div>
      <a className='btnmenu' href="/">Главная</a>
      <a className='btnmenu' href="/drugs">Магазин</a>
      <a className='btnmenu' href="/contacts">Контакты</a>
      <a className='btnmenu' href="/basket">Корзина</a>
      <div className="contact_bl t_right">
        <a href="mailto:" className="head_email">bapteka@mail.ru</a>
      </div>
    </div>
  );
}

module.exports = NavBar;
