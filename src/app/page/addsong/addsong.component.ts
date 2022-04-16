import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FileUploadService } from 'src/app/api/file-upload.service';

@Component({
  selector: 'app-addsong',
  templateUrl: './addsong.component.html',
  styleUrls: ['./addsong.component.css']
})
export class AddsongComponent implements OnInit {


  @Output() change = new EventEmitter<string>();

  @Input() song_text: string = "[ตัวอย่าง]  Intro:| [_Asus2] [_A] | [_Bm7] [_E] || [_Asus2] [_A] | [_Bm7] [_E] |;   จา[Asus2]ก.. วันนี้[A]..;[F#m] เธอจะไม่เห็น[E]หน้าคนอย่างฉัน[D#dim]อีก;      โปร[Bm7]ดจำเอาไว้[E];";


  songContent: any;
  // song_text: string = "[ตัวอย่าง]  Intro:| [_Asus2] [_A] | [_Bm7] [_E] || [_Asus2] [_A] | [_Bm7] [_E] |;   จา[Asus2]ก.. วันนี้[A]..;[F#m] เธอจะไม่เห็น[E]หน้าคนอย่างฉัน[D#dim]อีก;      โปร[Bm7]ดจำเอาไว้[E];";
  song_name: any;
  song_artist: any;
  song_img: string = 'https://kawpun.com/img/user.jpg';
  song_url: any;

  isChange: boolean = false;

  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: any; // Va

  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private fileUploadService: FileUploadService
  ) { }

  ngOnInit(): void {

    this.change.emit();

  }

  onShow() {
    // alert(this.song_text);
    // this.songContent = [];
    // setTimeout(() => {
    this.songContent = this.song_text.split(";");
    this.isChange = false;

    // }, 500);


    this.onGenerateChord();
  }

  onGenerateChord() {

    // const divsong = document.getElementsByTagName("div.song")[0];

    // var i = divsong.getElementsByTagName('p');
    // console.log(i);

    var tclass = "transposition";
    var cclass = "chord";
    var song_processed_class = "song-transposition-processed";
    // var song_selector = "div.song:not(." + song_processed_class + ")";
    var song_selector = "div.song";
    var oThis = this;

    $(document).ready(function () {
      $(song_selector).each(function () {
        var s = $(this).html();
        s = s.replace(/\[\s+\]/g, function (x) {
          var r = "";
          for (var i = 2; i < x.length; i++)
            r += "&nbsp; ";
          console.log(r);

          return r;
        });
        s = s.replace(/\[_/g, "<span class='chord-inline'>");
        s = s.replace(/\[/g, "<span class='chord'>");
        s = s.replace(/\]/g, "</span>");
        $(this).html(s);
      });


      $(song_selector + " span.chord").each(function () {
        var s = $(this).html();
        s = s.replace(/[ ]/g, " &nbsp; ");
        $(this).html(s);
      });
    });
  }

  // onChange(event: any) {
  //   this.file = event.target.files[0];
  // }

  // OnClick of button Upload
  // onUpload() {
  //   this.loading = !this.loading;
  //   console.log(this.file);
  //   this.fileUploadService.upload(this.file).subscribe(
  //     (event: any) => {
  //       if (typeof (event) === 'object') {

  //         // Short link via api response
  //         this.shortLink = event.link;
  //         alert('อัพโหลดเรียบร้อย');
  //         // alert(this.shortLink);

  //         this.song_img = this.shortLink;

  //         this.loading = false; // Flag variable
  //       }
  //     }
  //   );
  // }


  async onSubmit() {

    if (this.song_name && this.song_url && this.song_artist && this.song_img && this.song_text) {

      // alert(this.song_name);

      const postData = {
        song_name: this.song_name,
        song_artist: this.song_artist,
        song_img: this.song_img,
        song_url: this.song_url,
        song_text: this.song_text
      }


      await this.http.post("https://node.kawpun.com/addsong", postData).subscribe(res => {



      });

      alert('เพิ่มคอร์ดเพลงเรียบร้อย');

      setTimeout(() => {


        this.router.navigate(['/homeuser'], { relativeTo: this.route });
      }, 500)


    } else {
      alert('กรุณาใส่ข้อมูลให้ครบ');
    }

  }

  modelChangeFn(e: string) {

    this.song_text = e;
    this.isChange = true;
    // alert(this.isChange);
    // this.songContent = this.song_text.split(";");
    // this.onGenerateChord();

    // alert(e);

  }

}
