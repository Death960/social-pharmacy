const updateForm = document.getElementById('update-drug');

if (updateForm) {
  updateForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, description, img, price, salePrice } = e.target
    const { id } = e.target.dataset;
    const response = await fetch(`/api/update/${id}`, {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        img: img.value,
        description: description.value,
        price: price.value,
        salePrice: salePrice.value,
      })
    })
    const data = await response.json()
    if (data.message === 'Успешно') {
      window.location.assign('/')
    } else {
      alert(data.message)
    }
  })
}