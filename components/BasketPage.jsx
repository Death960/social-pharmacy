const React = require('react');
const Layout = require('./Layout');
const DrugItem = require('./DrugItems');

function BasketPage({ title, order, user }) {
  return (
    <Layout user={user} title={title}>
      <h1>Корзина</h1>

      <div className="container drug-container" style={{ display: 'flex' }}>

        <p>{order[0].OrderItems.map((oi) => <DrugItem key={oi.Drug.id} drug={oi.Drug} />)}</p>
      </div>
    </Layout>
  );
}

module.exports = BasketPage;