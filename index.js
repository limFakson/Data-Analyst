//script for a popup img in project section

document.querySelectorAll('.pro-img img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-img').style.display = 'block';
        document.querySelector('.fa').style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.querySelector('.popup-img img').src = image.getAttribute('src');
    }
});

// document.querySelector('.popup-img span').onclick = () => {
//     document.querySelector('.popup-img').style.display = 'none';
// }

function closeImg() {
    document.querySelector('.popup-img').style.display = 'none';
    document.body.style.overflow = 'auto';
}
console.log('working')