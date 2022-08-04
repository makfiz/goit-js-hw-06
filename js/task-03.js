const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const galleryContainer = document.querySelector(".gallery");

 let element = `<style type="text/css">
.gallery {display: flex;}

.gallery li {
  width: calc((100%)/3);
  list-style: none;
}

.gallery li + li {margin-left: 15px}

.gallery img {   
  width: 100%;
  height: 80%;
}
</style>`


images.forEach((img) => {

    let  elem = `<li><img src="${img.url}" alt="${img.alt}"></li>`
  element += elem
  
})

 galleryContainer.insertAdjacentHTML('beforeend', element)