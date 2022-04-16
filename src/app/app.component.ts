import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'KawpunMain';
  showFiller = false;

  onActivate(event: any) {
    window.scrollTo(0, 0);
  }

  imageObject: Array<object> = [{

    image: 'https://i.pinimg.com/564x/af/81/29/af8129f5e4465b951df48be88fc2ad85.jpg',
    thumbImage: 'https://i.pinimg.com/564x/af/81/29/af8129f5e4465b951df48be88fc2ad85.jpg',
    alt: 'alt of image',
    title: 'title of image'
  }, {
    image: 'https://i.pinimg.com/564x/78/a6/01/78a6014cefe61b5b4cc6a8cbaa834d09.jpg', // Support base64 image
    thumbImage: 'https://i.pinimg.com/564x/78/a6/01/78a6014cefe61b5b4cc6a8cbaa834d09.jpg', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    // order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  }, {
    image: 'https://i.pinimg.com/564x/4c/97/08/4c97087a2b6bc1301ba9b1fc729c9930.jpg', // Support base64 image
    thumbImage: 'https://i.pinimg.com/564x/4c/97/08/4c97087a2b6bc1301ba9b1fc729c9930.jpg', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    // order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  }, {
    image: 'https://i.pinimg.com/564x/d9/38/c9/d938c99accea412511c7a44c140f585d.jpg', // Support base64 image
    thumbImage: 'https://i.pinimg.com/564x/d9/38/c9/d938c99accea412511c7a44c140f585d.jpg', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    // order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  }, {
    image: 'https://i.pinimg.com/564x/a5/b9/a5/a5b9a52b8803a477f4ea9ae1769e4b80.jpg', // Support base64 image
    thumbImage: 'https://i.pinimg.com/564x/a5/b9/a5/a5b9a52b8803a477f4ea9ae1769e4b80.jpg', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    // order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  }, {
    image: 'https://i.pinimg.com/564x/3a/9a/3c/3a9a3c67425220d68f27f477dfb6ce70.jpg', // Support base64 image
    thumbImage: 'https://i.pinimg.com/564x/3a/9a/3c/3a9a3c67425220d68f27f477dfb6ce70.jpg', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    // order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  }, {
    image: 'https://i.pinimg.com/564x/06/af/52/06af52e0d5d6d5cf0bafedcfa8ce2cea.jpg', // Support base64 image
    thumbImage: 'https://i.pinimg.com/564x/06/af/52/06af52e0d5d6d5cf0bafedcfa8ce2cea.jpg', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    // order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  }, {
    image: 'https://i.pinimg.com/564x/0d/f5/c2/0df5c2ba33d50129123171ef860af82c.jpg', // Support base64 image
    thumbImage: 'https://i.pinimg.com/564x/0d/f5/c2/0df5c2ba33d50129123171ef860af82c.jpg', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    // order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  }, {
    image: 'https://i.pinimg.com/564x/7a/a2/36/7aa23606d0f19d7dac8259d721d7e302.jpg', // Support base64 image
    thumbImage: 'https://i.pinimg.com/564x/7a/a2/36/7aa23606d0f19d7dac8259d721d7e302.jpg', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    // order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  }, {
    image: 'https://i.pinimg.com/564x/28/6e/4b/286e4b595aa9ae55b88a9e8ce1665426.jpg', // Support base64 image
    thumbImage: 'https://i.pinimg.com/564x/28/6e/4b/286e4b595aa9ae55b88a9e8ce1665426.jpg', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    // order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  }
  ];


}
