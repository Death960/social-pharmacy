const React = require('react');

function NavBar({ user }) {
  return (
    <div id='navbar'>
      <div className='head_item'>
        <a href='/' className='logo'>
          <img src='/images/logo.png' />
        </a>
      </div>
      <div className='head_item' id='regions'>
        <div className='city_select'>
          <select className='city-list'>
            <option>Выберите город</option>
            <option data-class='city'>Сестрорецк</option>
            <option data-class='city'>Санкт-Петербург</option>
            <option data-class='city'>Москва</option>
            <option data-class='city'>Новосибирск</option>
            <option data-class='city'>Екатеринбург</option>
            <option data-class='city'>Казань</option>
            <option data-class='city'>Уфа</option>
            <option data-class='city'>Нижний Новгород</option>
            <option data-class='city'>Владивосток</option>
            <option data-class='city'>Тюмень</option>
            <option data-class='city'>Самара</option>
          </select>
        </div>
      </div>
      {user && <p>Hello, {user.name}</p>}
      <a className='btnmenu' href='/profil'>
        мой профиль
      </a>
      <a className='btnmenu' href='/'>
        Главная
      </a>
      <a className='btnmenu' href='/basket'>
        Корзина
      </a>
      <a className='btnmenu' href='/about'>
        О нас
      </a>
      {!user ? (
        <>
          <a className='btnmenu' href='/auth/sign-in'>
            Войти
          </a>
          <a className='btnmenu' href='/auth/sign-up'>
            Зарегестрироваться
          </a>
        </>
      ) : (
        <>
          <a className='btnmenu' href='/api/auth/logout'>
            Выйти
          </a>
        </>
      )}
    </div>
  );
}

module.exports = NavBar;
