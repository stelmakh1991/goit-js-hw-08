const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const imageList = document.querySelector('.gallery');
// Creation of image card template
function createImageItem(obj) {
    const smallImage = obj.preview;
    const largeImage = obj.original;
    const imageDescription = obj.description;
    return `<li class="gallery-item">
  <a class="gallery-link" href="${largeImage}">
    <img
      class="gallery-image"
      src="${smallImage}"
      data-source="${largeImage}"
      alt="${imageDescription}"
    />
  </a>
</li>`;
}
//Image gallery creation from array using markup
function createGalleryMarkup() {
  const markup = images.map(createImageItem).join('');
  imageList.insertAdjacentHTML('afterbegin', markup);
}

createGalleryMarkup();
// Creation of modal window
imageList.addEventListener('click', e => {
  if (e.target.classList.contains('galleryImage')) e.preventDefault();

    const instance = basicLightbox.create(`
    <div class="modal" role="fullsize-img-review">
        <img
      class="gallery-image"
      src="${e.target.dataset.source}"
      alt="${e.target.alt}"
    />
    </div>
    `, {
        closable: false,
        onShow: instance => {
            window.addEventListener('keydown', closeModal);
        },

        onClose: instance => {
            window.removeEventListener('keydown', closeModal);
        }
    });
    
    function closeModal(e) {
        if (e.code === 'Escape') instance.close();
    }
    
    instance.show();

})


