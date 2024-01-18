const React = require('react');
const Layout = require('./Layout');

function FormUpdatePage({ title, user, drug }) {
  return (
    <Layout title={title} user={user}>
      <div className="container">
        <form data-id={drug.id} id="update-drug">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Название
            </label>
            <input
              name="name"
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              defaultValue={drug.name}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Описание
            </label>
            <input
              defaultValue={drug.description}
              name="description"
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Цена
            </label>
            <input
              defaultValue={drug.price}
              name="price"
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Цена со скидкой
            </label>
            <input
              defaultValue={drug.salePrice}
              name="salePrice"
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Картинка
            </label>
            <input
              defaultValue={drug.img}
              name="img"
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Изменить
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = FormUpdatePage;