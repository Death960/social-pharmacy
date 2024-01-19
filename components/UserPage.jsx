const React = require('react')
const Layout = require('./Layout')


function UserPage({ title, user }) {
  console.log(user, 'uuuuuusss')
  return (<Layout title={title} user={user}>
    <h1 className='bibabobauser'>Мой профиль:</h1>
    <div className='profileContainer'>
      <img src={user.img} className='userImage' alt='...' />
      <div className='profileInfo'>
        <h5 className='profileTitle'>Имя: {user.name}</h5>
        <h4 className='profileTitle'>Почта: {user.email}</h4>
      </div>
    </div>
  </Layout>)

}

module.exports = UserPage

