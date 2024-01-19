const React = require('react');
const Layout = require('./Layout');

function SignUpPage() {
  return (
    <Layout>
      <div className='container'>
        <form id='sign-up'>
          <div className='mb-3'>
            <input
              name='name'
              type='text'
              className='form-control'
              id='exampleInputEmail1'
              placeholder='Как вас зовут?'
            />
          </div>
          <div className='mb-3'>
            <input
              name='email'
              type='email'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Электронная почта'
            />
          </div>
          <div className='mb-3'>
            <input
              name='password'
              type='password'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Пароль'
            />
          </div>
          <div className='mb-3'>
            <input
              name='confirmPassword'
              type='password'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Повторите пароль'
            />
          </div>
          <div className='mb-3'>
            <input
              name='img'
              type='text'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Ссылка на аватар'
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Зарегистрироваться
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = SignUpPage;
