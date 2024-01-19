const drugContainerLike = document.querySelector(".drug-container");

drugContainerLike?.addEventListener("click", async (e) => {
  if (e.target.classList.contains("favorite")) {
    e.preventDefault();
    const { id } = e.target.dataset;
    const res = await fetch(`/api/addBasket`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const data = await res.json();
    if (data.message === "success") {
      e.target.innerText = "В корзину";
      e.target.classList.add("remove");
      e.target.classList.remove("favorite");
    } else {
      alert(data.message);
    }
    return;
  }

  if (e.target.classList.contains("remove")) {
    e.preventDefault();
    const { id } = e.target.dataset;
    const res = await fetch(`/api/addBasket/${id}`, {
      method: "delete",
    });
    const data = await res.json();
    if (data.message === "success") {
      e.target.closest(".card").remove();
      e.target.innerText = "В корзину";
      e.target.classList.add("favorite");
      e.target.classList.remove("remove");
    } else {
      alert(data.message);
    }
    return;
  }
});
