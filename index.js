function addSpanClass(event) {
  const iconText = event.target.querySelector('.map__icon--text');
  iconText.classList.add('map__icon--text-active');
}
function removeSpanClass(event) {
  const iconText = event.target.querySelector('.map__icon--text');
  iconText.classList.remove('map__icon--text-active');
}

const mapIcon = document.querySelectorAll('.map__icon');
for (i = 0; i < mapIcon.length; i++) {
  mapIcon[i].addEventListener('mouseenter', addSpanClass);
  mapIcon[i].addEventListener('mouseleave', removeSpanClass);
}
