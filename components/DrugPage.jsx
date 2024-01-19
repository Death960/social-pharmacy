const React = require('react');
const Layout = require('./Layout');

function DrugPage({ title, user, drug }) {
  return (
    <Layout user={user} title={title}>
      <h1>Description page</h1>
      <div className="card" style={{ width: '18rem', margin: '20px' }}>
        <img src={drug.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{drug.name}</h5>
          <p className="card-text">{drug.description}</p>
          <h5 className='card-title'>Цена: {drug.price}</h5>
          <h5 className='card-title'>Цена со скидкой: {drug.salePrice}</h5>
          <a href={`/`} className='btn btn-primary'>
            Назад
          </a>
        </div>
      </div>
    </Layout>
  )
};


module.exports = DrugPage;