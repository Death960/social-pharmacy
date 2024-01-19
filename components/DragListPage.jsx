const React = require('react');
const Layout = require('./Layout');
const FormAddDrug = require('./FormAddDrug');

const DrugItem = require('./DrugItems');

function DrugsListPage({ title, drugs, user }) {
  return (
    <Layout user={user} title={title}>
      <h1>Drugs Page</h1>
      {user && user.isAdmin && (<><FormAddDrug /></>)}
      <div className='babaralist'>
        {user && (<>
          <div className='container drug-container' style={{ display: 'flex' }}>
            {drugs.map((drug) => (
              <DrugItem key={drug.id} drug={drug} user={user} />
            ))}
          </div></>)}
      </div>
    </Layout>
  );
}

module.exports = DrugsListPage;
