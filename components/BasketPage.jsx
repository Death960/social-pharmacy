const React = require('react');
const Layout = require('./Layout');
const DrugItem = require('./DrugItems');

function BasketPage({ title, drugs, user }) {
  return (
    <Layout user={user} title={title}>
      <h1>Корзина</h1>
      
      <div className="container drug-container" style={{ display: 'flex' }}>
      {drugs.map((drug) => (
          <DrugItem key={drug.id} drug={drug} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = BasketPage;
