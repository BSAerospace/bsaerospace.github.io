var i = 0;
var images = [];
var slideTime = 3500; // 5 seconds
var header = document.getElementById('header');

images[0] = 'https://i.postimg.cc/5NsGh2XL/img5.png';
images[1] = 'https://i.postimg.cc/9fLj1YG5/img6.png';
images[2] = 'https://i.postimg.cc/hGwvGnh5/img8.png';
images[3] = 'https://i.postimg.cc/Kctjmdb0/img13.png';
images[4] = 'https://i.postimg.cc/MH1v4L6r/img2.png';
images[5] = 'https://i.postimg.cc/6pryzgj7/img10.avif';
images[6] = 'https://i.postimg.cc/7YX8qNWC/img14.png';
images[7] = 'https://i.postimg.cc/cJK12zTM/img18.png';
images[8] = 'https://i.postimg.cc/mrhhRkZ9/img7.png';
images[9] = 'https://i.postimg.cc/vB9wMFJM/img12.png';

function changePicture() {
    header.style.backgroundImage = `url(${images[i]})`;

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout(changePicture, slideTime);
}

window.onload = changePicture;

