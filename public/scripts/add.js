const addForm = document.getElementById('add-drug');

if (addForm) {
  addForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, description, price, salePrice, img } = e.target;
    const res = await fetch('/api/add', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        description: description.value,
        price: price.value,
        salePrice: salePrice.value,
        img: img.value,
      }),
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
