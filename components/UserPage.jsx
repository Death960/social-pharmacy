const React = require('react')
const Layout = require('./Layout')


function UserPage({ title, user }){
    return( <Layout title={title} user={user}>
         <h1>Мой профиль</h1>
       
          <img src={user.img} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>{user.name}</h5>
          </div>
      

    </Layout>)

}

module.exports= UserPage

