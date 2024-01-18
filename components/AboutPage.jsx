const React = require('react');
const Layout = require('./Layout');

function AboutPage({ title, user }) {
  return (
    <Layout user={user} title={title}>
      <h1>About us</h1>
      <div className='contact_bl t_right'>
        <a href='mailto:' className='head_email'>
          bapteka@mail.ru
        </a>
      </div>
    </Layout>
  );
}

module.exports = AboutPage;