const React = require('react');
const NavBar = require('./NavBar');

module.exports = function Layout({ title, children, user }) {
  return (
    <html lang='en'>
      <head>
        <title>{title}</title>
        {/* <link rel="stylesheet" href="/css/style.css" /> */}
        <link
          href='/styles/bootstrap.css'
          rel='stylesheet'
          crossOrigin='anonymous'
        />
      </head>
      <body>
        <NavBar user={user} />
        {children}
      </body>
    </html>
  );
};
