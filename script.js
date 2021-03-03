document.addEventListener('DOMContentLoaded', content);
const changeTheme = document.querySelector(".theme_button");
const body = document.getElementsByTagName("body");

    function content () {
    if (localStorage.getItem('bgcolor') === 'gray') {
    body[0].classList.toggle('gray');
    } else {
    body[0].classList.remove('gray')
  }
}

     changeTheme.addEventListener('click', () => {
     body[0].classList.toggle('gray');
  if (body[0].classList.contains('gray')){
        localStorage.setItem('bgcolor', 'gray');
  } else {
        localStorage.setItem('bgcolor', 'white')
    }
})