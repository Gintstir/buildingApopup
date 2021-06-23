const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');


close.addEventListener('click', () => {
    popup.style.display = 'none';
    console.log("button clicked");
});

button.addEventListener('click', () => {
    popup.style.display = 'block';
    console.log("button clicked");
});



popup.addEventListener('click', () => {
    popup.style.display = 'none';
    console.log("button clicked");
});

