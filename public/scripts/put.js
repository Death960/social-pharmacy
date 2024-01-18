const updateForm = document.getElementById('update-drug');

if (updateForm) {
  updateForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, price, img } = e.target
    const { id } = e.target.dataset;
    const response = await fetch(`/api/update/${id}`, {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        price: price.value,
        img: img.value
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