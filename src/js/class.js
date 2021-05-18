function changeClass() {
  var status = document.getElementById('check');

  if(status.checked) {
    document.querySelector('nav').classList.add('fixed')
  } else {
    document.querySelector('nav').classList.toggle('fixed')
}
}