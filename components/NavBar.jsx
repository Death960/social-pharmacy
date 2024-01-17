const React = require('react');

function NavBar({ user }) {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
          <a className='nav-link' href='/auth/sing-in'>
              Мой профиль
            </a>
          <a className='nav-link' href='/auth/sing-in'>
              Корзина
            </a>
            <a className='nav-link' href='/auth/sing-in'>
              Sing-In
            </a>
            <a className='nav-link' href='/auth/sing-up'>
              Sing-Up
            </a>
            {user && <p>Hello, {user.name}</p>}
          </div>
        </div>
      </div>
    </nav>
  );
}

module.exports = NavBar;
