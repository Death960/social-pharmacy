const drugContainer = document.querySelector('.drug-container');

if (drugContainer) {
  drugContainer.addEventListener('click', async (e) => {
    console.log('click');
    if (e.target.classList.contains('delete')) {
      const answer = confirm('Подтвердите удаление');
      if (answer) {
        const { id } = e.target.dataset;
        const res = await fetch(`/api/delete/${id}`, {
          method: 'delete',
        });
        const data = await res.json();
        if (data.message === 'success') {
          e.target.closest('.card').remove();
        } else {
          alert(data.message);
        }
      }
    }
  });
}
