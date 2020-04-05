import { Component, OnInit, ViewChild } from '@angular/core';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  images: GalleryItem[];
  realMessage: string;
  private isRunning: boolean = false;
  constructor() { }

  ngOnInit() {
    this.images = [
      new ImageItem({ src: '../../assets/images/anniv.jpg', thumb: '../../assets/images/anniv.jpg' }),
      new ImageItem({ src: '../../assets/images/couple-1.jpg', thumb: '../../assets/images/couple-1.jpg' }),
      new ImageItem({ src: '../../assets/images/couple-2.jpg', thumb: '../../assets/images/couple-2.jpg' }),
      new ImageItem({ src: '../../assets/images/couple-3.jpg', thumb: '../../assets/images/couple-3.jpg' }),
      new ImageItem({ src: '../../assets/images/couple-4.jpg', thumb: '../../assets/images/couple-4.jpg' }),
      new ImageItem({ src: '../../assets/images/couple-5.jpg', thumb: '../../assets/images/couple-5.jpg' }),
      new ImageItem({ src: '../../assets/images/couple-6.jpg', thumb: '../../assets/images/couple-6.jpg' }),
      new ImageItem({ src: '../../assets/images/couple-7.jpg', thumb: '../../assets/images/couple-7.jpg' }),
      new ImageItem({ src: '../../assets/images/couple-8.jpg', thumb: '../../assets/images/couple-8.jpg' }),
      new ImageItem({ src: '../../assets/images/couple-9.jpg', thumb: '../../assets/images/couple-9.jpg' }),
      new ImageItem({ src: '../../assets/images/couple-10.jpg', thumb: '../../assets/images/couple-10.jpg' }),
      new ImageItem({ src: '../../assets/images/couple-11.jpg', thumb: '../../assets/images/couple-11.jpg' }),
      new ImageItem({ src: '../../assets/images/couple-12.jpg', thumb: '../../assets/images/couple-12.jpg' }),
      new ImageItem({ src: '../../assets/images/couple-13.jpg', thumb: '../../assets/images/couple-13.jpg' }),
      new ImageItem({ src: '../../assets/images/couple-14.jpg', thumb: '../../assets/images/couple-14.jpg' }),
      new ImageItem({ src: '../../assets/images/couple-15.jpg', thumb: '../../assets/images/couple-15.jpg' }),
      new ImageItem({ src: '../../assets/images/couple-16.jpg', thumb: '../../assets/images/couple-16.jpg' }),
      new ImageItem({ src: '../../assets/images/couple-17.jpg', thumb: '../../assets/images/couple-17.jpg' }),
      new ImageItem({ src: '../../assets/images/couple-18.jpg', thumb: '../../assets/images/couple-18.jpg' }),
      new ImageItem({ src: '../../assets/images/couple-19.jpg', thumb: '../../assets/images/couple-19.jpg' }),
      new ImageItem({ src: '../../assets/images/couple-20.jpg', thumb: '../../assets/images/couple-20.jpg' }),
      new ImageItem({ src: '../../assets/images/couple-21.jpg', thumb: '../../assets/images/couple-21.jpg' })
    ];

    this.realMessage = `    HI LOVE

    I just want to say na sobra kong
    swerte sayo kasi you are the best.
    God gave me you. Sana magustuhan
    mo itong simpleng effort na ginawa ko
    para sayo.
  
    I always pray and pray to God
    for him to be the CENTER of our relationship.
    I always pray to HIM na sana tayo na FOREVER.
    Hindi natin kaya yung problema pero kaya niya
    kaya sa kanya tayo lalapit.
  
    Nag-aaway man tayo minsan, minsan tinotopak ako,
    minsan ikaw naman pero ano man ang mangyari,
    KAPIT LANG. Naks.`;
  }

  onIndexChange(params) {
    this.playAudio();
  }

  playAudio() {
    if(!this.isRunning) {
      let audio = new Audio();
      audio.src = '../../assets/sounds/theone.mp3';
      audio.load();
      audio.play();
      audio.volume = 0.4;
      audio.loop = true;
      this.isRunning = true;
    }
  }

}
