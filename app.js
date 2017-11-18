let gallery = document.body.querySelector('.gallery-wrap');

gallery.addEventListener('click', function(e) {
    if (e.target.closest('.image-gallery-item')) {
        let imgNumber = e.target.closest('.image-gallery-item').dataset.imgName,
            popUp = document.createElement('div'),
            popUpImage = document.createElement('img');

        popUp.classList.add('popup-image-wrap');
        popUpImage.setAttribute('src', `img/large/img-${imgNumber}.jpg`);
        popUpImage.setAttribute('alt', `img-${imgNumber}`);
        popUp.appendChild(popUpImage);
        popUp.addEventListener('click', removeElement);

        document.body.appendChild(popUp);
    }
});

function removeElement() {
    this.removeEventListener('click', removeElement);
    this.remove();
}