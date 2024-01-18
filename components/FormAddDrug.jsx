const React = require('react');

function AddHeroForm() {
  return (
    <div className='container'>
      <form id='add-drug'>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            название
          </label>
          <input
            name='name'
            type='text'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            описание
          </label>
          <input
            name='description'
            type='text'
            className='form-control'
            id='exampleInputPassword1'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            цена
          </label>
          <input
            name='price'
            type='text'
            className='form-control'
            id='exampleInputPassword1'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            цена со скидкой
          </label>
          <input
            name='salePrice'
            type='text'
            className='form-control'
            id='exampleInputPassword1'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            картинка
          </label>
          <input
            name='img'
            type='text'
            className='form-control'
            id='exampleInputPassword1'
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
}

module.exports = AddHeroForm;
