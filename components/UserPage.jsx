const React = require('react')
const Layout = require('./Layout')


function UserPage({ title, user }) {
  return (<Layout title={title} user={user}>
    <h1>Мой профиль</h1>
    <div className='profileContainer'>
      <img src={user.img} className='userImage' alt='...' />
      <h5 className='profileTitle'>Имя: {user.name}</h5>
    </div>
  </Layout>)

}

module.exports = UserPage

