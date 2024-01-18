const React = require('react');
const NavBar = require('./NavBar');

module.exports = function Layout({ title, children, user }) {
  return (
    <html lang='en'>
      <head>
        <title>{title}</title>
        <link rel='stylesheet' href='/styles/style.css' />
        <link rel='stylesheet' href='/styles/normalize.css' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Rubik&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC'
          crossOrigin='anonymous'
        ></link>
        <script defer src='/scripts/put.js' />
        <script defer src='/scripts/delete.js' />
        <script defer src='/scripts/add.js' />
        <script defer src='/scripts/auth.js' />
        <script defer src='/scripts/addBasket.js' />
      </head>
      <body>
        <NavBar user={user} />
        {children}
      </body>
    </html>
  );
};
