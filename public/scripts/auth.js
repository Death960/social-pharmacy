const singInForm = document.querySelector('#sign-in');
const singUpForm = document.querySelector('#sign-up');

if (singInForm) {
  singInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, password } = e.target;
    const res = await fetch('/api/auth/sign-in', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        password: password.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'Success') {
      window.location.assign('/');
    } else {
      alert(data.message);
    }
  });
}

if (singUpForm) {
  singUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, password, img } = e.target;
    const res = await fetch('/api/auth/sign-up', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        password: password.value,
        img: img.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'Success') {
      window.location.assign('/');
    } else {
      alert(data.message);
    }
  });
}
