const addForm = document.getElementById('add-drug');

if (addForm) {
  addForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, description, price, salePrice, img } = e.target;


    const formData = new FormData();

    formData.append('img', img.files[0]);
    formData.append('name', name.value);
    formData.append('description', description.value);
    formData.append('price', price.value);
    formData.append('salePrice', salePrice.value);


    const res = await fetch('/api/add', {
      method: 'post',
      body: formData,
    });
    const data = await res.json();
    if (data.message === 'success') {
      document
        .querySelector('.drug-container')
        .insertAdjacentHTML('beforeend', data.html);
      e.target.reset();
    } else {
      alert(data.message);
    }
  });
}
