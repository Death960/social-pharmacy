const React = require('react');

function DrugItems({ drug }) {
  return (
    <div className='card' style={{ width: '18rem', margin: '20px' }}>
      <img src={drug.img} className='card-img-top' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>{drug.name}</h5>
        <h5 className='card-title'>{drug.price}</h5>
        <h5 className='card-title'>{drug.salePrice}</h5>

        <a href={`/heroes/${drug.id}`} className='btn btn-primary'>
          Подробнее
        </a>
        <button
          data-id={drug.id}
          className='btn btn-danger delete'
          type='button'
        >
          Уничтожить
        </button>
        <button
          data-id={drug.id}
          className='btn btn-danger favorite'
          type='button'
        >
          В корзину
        </button>
        <a
          href={`/update/${drug.id}`}
          className='btn btn-warning update'
          type='button'
        >
          Изменить
        </a>
      </div>
    </div>
  );
}

module.exports = DrugItems;
