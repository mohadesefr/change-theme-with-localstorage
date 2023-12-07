const switchElement = document.querySelector('.switch');


switchElement.addEventListener('click', function () {
  console.log('click')
  document.body.classList.toggle('dark');

  if (document.body.className == 'dark'){
    localStorage.setItem('class', 'dark');

  } else {
    localStorage.setItem('class', 'light');
  }
  
  //or
  // if (document.body.className.includes('dark')){  //the answer is Boolean
  //   localStorage.setItem('class', 'dark');

  // } else {
  //   localStorage.setItem('class', 'light');
  // }
  
})

window.addEventListener('load', (event)=>{
if (localStorage.getItem('class') === 'dark'){
  document.body.classList.add('dark');
}
});