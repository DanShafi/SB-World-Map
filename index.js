function addSpanClass(event) {
  const iconText = event.target.querySelector('.map-icon-text');
  iconText.classList.add('map-icon-text-active');
}
function removeSpanClass(event) {
  const iconText = event.target.querySelector('.map-icon-text');
  iconText.classList.remove('map-icon-text-active');
}

const mapIcon = document.querySelectorAll('.map-icon');
for (i = 0; i < mapIcon.length; i++) {
  mapIcon[i].addEventListener('mouseenter', addSpanClass);
  mapIcon[i].addEventListener('mouseleave', removeSpanClass);
}
