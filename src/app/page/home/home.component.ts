import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SongApi } from 'src/app/api/songApi';
import { SongModels } from 'src/app/models/songModels';
import { Convert } from 'src/app/models/songWelcom';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  innerHeight: any;
  innerWidth: any;
  _menuName = 'คอร์ดทั้งหมด';
  public isDesktop: boolean = true;

  res: any;
  welcome: any;
  jsonRes: any;
  numSong: any;
  numPage: any;
  numSongOfPage = 16;


  song_id: String[] = [];
  song_name: String[] = [];
  song_artist: String[] = [];
  song_img: String[] = [];


  constructor(
    private http: HttpClient,
  ) {
    this.innerHeight = (window.screen.height);
    this.innerWidth = (window.screen.width);

    if (window.screen.width > 600) {
      this.isDesktop = true;
      // alert("คุณกำลังใช้งานบนคอมพิวเตอร์");
    } else {
      this.isDesktop = false;
      // alert("คุณกำลังใช้งานบนสมาร์ทโฟน");
    }


    this.http.get("https://node.kawpun.com/songlist").subscribe(res => {

      this.jsonRes = JSON.stringify(res);
      this.welcome = Convert.toWelcome(this.jsonRes);
      this.numSong = this.welcome.length;
      this.numPage = (this.numSong / this.numSongOfPage) + 1;

      let currentSongShow = 1;
      let numSongShow = this.numSongOfPage;

      let songShow = currentSongShow + (numSongShow - 2);
      let curr = currentSongShow - 1;

      for (curr; curr <= songShow; curr++) {
        this.song_id.push(this.welcome[curr].song_id);
        this.song_name.push(this.welcome[curr].song_name);
        this.song_artist.push(this.welcome[curr].song_artist);
        this.song_img.push(this.welcome[curr].song_img);
      }


    });

  }

  ngOnInit(): void {
  }

  onPageClick(numPage: any) {

    this.song_id = [];
    this.song_name = [];
    this.song_artist = [];
    this.song_img = [];

    let numSongShow = this.numSongOfPage;
    let currentSongShow = ((numPage - 1) * (numSongShow) + 1);

    let songShow = currentSongShow + (numSongShow - 2);
    let curr = currentSongShow - 1;

    for (curr; curr <= songShow; curr++) {

      this.song_id.push(this.welcome[curr].song_id);
      this.song_name.push(this.welcome[curr].song_name);
      this.song_artist.push(this.welcome[curr].song_artist);
      this.song_img.push(this.welcome[curr].song_img);

    }
  }


  allSong: string[] = [
    'แน่ใจไหม',
    'ME',
    'เจ็บจริง',
    'จม',
    'ดีอะ',
    'อยู่ในสาย',
    'ปล่อยปาก',
    'หมดความหมาย',
    'เผลอหรือตั้งใจ',
    'ชั่วชีวิต',
    'แสงสุดท้าย',
    'ผ่าน',
    'สองรัก',
    'คำยินดี',
    'เพื่อนสนิท',
    'เลือกได้ไหม'
  ];

  allArtist: string[] = [
    'นนท์ ธนนท์ ',
    'PEARWAH แพรวา',
    'อะตอม ชนกันต์',
    'หนุ่ม กะลา',
    'BNK48',
    'Three Man Down',
    'อะตอม ชนกันต์',
    'POTATO ',
    'อิ้งค์ วรันธร',
    'COCKTAIL',
    'Bodyslam',
    'Slot Machine',
    'Zeal',
    'KLEAR',
    'Endorphine',
    'Zaza'];

  allall: string[] = [
    'แน่ใจไหม–นนท์ ธนนท์ ',
    'ME–PEARWAH แพรวา',
    'เจ็บจริง–อะตอม ชนกันต์',
    'จม–หนุ่ม กะลา',
    'ดีอะ–BNK48',
    'อยู่ในสาย–Three Man Down',
    'ปล่อยปาก–อะตอม ชนกันต์',
    'หมดความหมาย–POTATO ',
    'เผลอหรือตั้งใจ–อิ้งค์ วรันธร',
    'ชั่วชีวิต–COCKTAIL',
    'แสงสุดท้าย-Bodyslam',
    'ผ่าน-Slot Machine',
    'สองรัก-Zeal',
    'คำยินดี-KLEAR',
    'เพื่อนสนิท-Endorphine',
    'เลือกได้ไหม-Zaza'];

  poppularSong: string[] = [
    'แน่ใจไหม–นนท์ ธนนท์ ',
    'ME–PEARWAH แพรวา',
    'เจ็บจริง–อะตอม ชนกันต์',
    'จม–หนุ่ม กะลา',
    'ดีอะ–BNK48',
    'อยู่ในสาย–Three Man Down',
    'ปล่อยปาก–อะตอม ชนกันต์',
    'หมดความหมาย–POTATO ',
    'เผลอหรือตั้งใจ–อิ้งค์ วรันธร',
    'ชั่วชีวิต–COCKTAIL',
  ];

  legendSong: string[] = [
    'แสงสุดท้าย-Bodyslam',
    'ผ่าน-Slot Machine',
    'สองรัก-Zeal',
    'คำยินดี-KLEAR',
    'เพื่อนสนิท-Endorphine',
    'เลือกได้ไหม-Zaza',
    'ไม่มีใครรู-้เป๊ก ผลิตโชค',
    'ไกลแค่ไหน คือ ใกล้-Getsunova'];

  songObject: Array<object> = [{
    name: 'เพลงที่ ',
    artist: 'artist of image',
    alt: 'alt of image',
    image: 'https://i.pinimg.com/564x/af/81/29/af8129f5e4465b951df48be88fc2ad85.jpg',
  }, {
    name: '',
    artist: 'alt of image',
    alt: 'title of image',
    image: 'https://i.pinimg.com/564x/af/81/29/af8129f5e4465b951df48be88fc2ad85.jpg',
  }, {
    name: '',
    artist: 'alt of image',
    alt: 'title of image',
    image: 'https://i.pinimg.com/564x/af/81/29/af8129f5e4465b951df48be88fc2ad85.jpg',
  }, {
    name: '',
    artist: 'alt of image',
    alt: 'title of image',
    image: 'https://i.pinimg.com/564x/af/81/29/af8129f5e4465b951df48be88fc2ad85.jpg',
  }, {
    name: '',
    artist: 'alt of image',
    alt: 'title of image',
    image: 'https://i.pinimg.com/564x/af/81/29/af8129f5e4465b951df48be88fc2ad85.jpg',
  }, {
    name: '',
    artist: 'alt of image',
    alt: 'title of image',
    image: 'https://i.pinimg.com/564x/af/81/29/af8129f5e4465b951df48be88fc2ad85.jpg',
  }, {
    name: '',
    artist: 'alt of image',
    alt: 'title of image',
    image: 'https://i.pinimg.com/564x/af/81/29/af8129f5e4465b951df48be88fc2ad85.jpg',
  }, {
    name: '',
    artist: 'alt of image',
    alt: 'title of image',
    image: 'https://i.pinimg.com/564x/af/81/29/af8129f5e4465b951df48be88fc2ad85.jpg',
  }, {
    name: '',
    artist: 'alt of image',
    alt: 'title of image',
    image: 'https://i.pinimg.com/564x/af/81/29/af8129f5e4465b951df48be88fc2ad85.jpg',
  }, {
    name: '',
    artist: 'alt of image',
    alt: 'title of image',
    image: 'https://i.pinimg.com/564x/af/81/29/af8129f5e4465b951df48be88fc2ad85.jpg',
  }, {
    name: '',
    artist: 'alt of image',
    alt: 'title of image',
    image: 'https://i.pinimg.com/564x/af/81/29/af8129f5e4465b951df48be88fc2ad85.jpg',
  }
  ];

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
