(function menuDropdown() {
  console.log('contando');
  let cta = document.querySelector('.dropdown-toggle');
  let dropdown = document.querySelector('.dropdown');
  cta.addEventListener('click', () => {
    dropdown.classList.toggle('dropdown-opened');
  });

}());