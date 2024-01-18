const React = require('react');
const Layout = require('./Layout');
const DrugItem = require('./DrugItems');

function BasketPage({ title, order, user }) {
  return (
    <Layout user={user} title={title}>
      <h1>Корзина</h1>
      
      <div className="container drug-container" style={{ display: 'flex' }}>
      {/* {drugs.map((drug) => ( */}
          {/* //  */}
          <p>{order[0].OrderItems.map((oi) => <DrugItem key={oi.Drug.id} drug={oi.Drug} />)}</p>
      </div>
    </Layout>
  );
}

module.exports = BasketPage;


// const React = require('react');
// const Layot = require('./Layot');

// function Basket({ title, order }) {
//   return (
//     <Layot title={title}>
//       <div>
//         {order[0].OrderItems.map((orderItem) => (
//           <p>{orderItem.Drug.title}</p>
//         ))}
//       </div>
//     </Layot>
//   );
// }
// module.exports = Basket;

// const React = require('react');
// const Layout = require('./Layout');
// const DrugItem = require('./DrugItems');

// function BasketPage({ title, drugs, user }) {
//   return (
//     <Layout user={user} title={title}>
//       <h1>Корзина</h1>
      
//       <div className="container drug-container" style={{ display: 'flex' }}>
//       {drugs.map((drug) => (
//           <DrugItem key={drug.id} drug={drug} />
//         ))}
//       </div>
//     </Layout>
//   );
// }

// module.exports = BasketPage;