const images = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/view-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/view-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },];

const refs = {
    galleryList: document.querySelector('ul.gallery'),
    lightbox: document.querySelector('.lightbox'),
    btn: document.querySelector('[data-action="close-lightbox"]')
  };

  
  
  
     
  
  const createImage = (item, parent) => {
    const { preview, original, description } = item;
    const img = document.createElement('img');
    
    img.classList.add('gallery__image');
    img.dataset.source = original;
    img.src = preview;
    img.alt = description;
    
    parent.appendChild(img);
  };
  
  const createLink = (item, parent) => {
    const { original } = item;
    const a = document.createElement('a');
    
    a.classList.add('gallery__link');
    a.href = original;
    
    createImage(item, a);
    
    parent.appendChild(a);
  };
  
  const createItem = (item) => {
    const li = document.createElement('li');
    li.classList.add('gallery__item');
    
    createLink(item, li);
    
    return li;
  };
  
  const renderListItems = (arr) => {
    const items = arr.map( (item) => createItem(item));
    
    refs.galleryList.append(...items);
  };
  
  renderListItems(images);
  
  
  
  
  function onClickHandler(e) {
    e.preventDefault();
    
    if(e.target.nodeName === 'IMG') {
      refs.lightbox.classList.add('is-open');
      refs.lightbox.querySelector('.lightbox__image').src = e.target.src;
      refs.lightbox.querySelector('.lightbox__image').alt = e.target.alt;
    }
  }
  
  function onCloseHandler(e) {
    if(e.target.nodeName === "I" || e.target.nodeName === "BUTTON") {
      refs.lightbox.classList.remove('is-open');
    }
  }
  
  refs.galleryList.addEventListener('click', onClickHandler);
  refs.btn.addEventListener('click', onCloseHandler);