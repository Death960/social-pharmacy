const React = require('react')
const Layout = require('./Layout')

function PageNotFound() {
  return (
    <Layout>
      <div>
        <img className='notfound' src='https://standardbeagle.com/wp-content/uploads/2023/01/404-page-hero-1024x579.jpg' />
      </div>
    </Layout>
  )
};

module.exports = PageNotFound