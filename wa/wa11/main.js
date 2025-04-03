const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imageNames = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];
/* Declaring the alternative text for each image file */
const altText = ['a close up of a snake eye', 'a picture of my black and white dog', 'a line of ombre blue crochet cats', 'a cat getting surprised with a fish with a candle on it for its birthday', 'a fake cartoony sheep with a floor crown'];
/* Looping through images */

for (let i = 0; i < 5; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imageNames[i]);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', () => {
        displayedImage.src = imageNames[i];
        displayedImage.alt = altText[i];
    })
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    if(btn.getAttribute('class') == 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    }
    else{
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
    }
})