import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Convert } from 'src/app/models/songText';

@Component({
  selector: 'app-songuser',
  templateUrl: './songuser.component.html',
  styleUrls: ['./songuser.component.css']
})
export class SonguserComponent implements OnInit {


  public isDesktop: boolean = true;

  // songContent: any;
  songId: any;
  songJson: any;
  songName: any;
  songArtist: any;
  songImg: any;
  songUrl: any;
  songContent: any;


  private videoURL: string = 'https://www.youtube.com/embed/jEGTtgjvpU4';
  safeURL: any;

  @Input() state: any;


  constructor(
    private http: HttpClient,
    private _sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router
  ) {

    if (window.screen.width > 600) {
      this.isDesktop = true;
      // alert("คุณกำลังใช้งานบนคอมพิวเตอร์");
    } else {
      this.isDesktop = false;
      // alert("คุณกำลังใช้งานบนสมาร์ทโฟน");
    }


    // this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);

    this.route.params.subscribe((params: Params) => {
      this.songId = Number.parseInt(params['id']);
    });

    this.getData();


  }

  async getData() {

    const postData = { song_id: this.songId }

    await this.http.post("https://node.kawpun.com/songuser", postData).subscribe(res => {


      this.songJson = Convert.toSongText(JSON.stringify(res));

      // this.ress = JSON.stringify(res);

      var forsplit = this.songJson[0].song_content;

      this.songName = this.songJson[0].song_name;
      this.songArtist = this.songJson[0].song_artist;
      this.songImg = this.songJson[0].song_img;
      this.songUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.songJson[0].song_url);
      this.songContent = forsplit.split(";");
      // alert(this.textsong[8]);

      // alert(JSON.stringify(res));

      this.onGenerateChord();


    });

  }

  textHtml = '<span class="chord"> Am </span>';
  htmlToAdd = " ร" + this.textHtml + "อนแรมมาเนิ่นนานเพียงหนึ่งใจ กับทางที่โรยเอาไว้ด้วยขวากหนาม <br> ถูกแหลมคม ทิ่มแทง จนมันแทบจะทนไม่ไหว";
  title = 'app works!';

  ngOnInit(): void {

  }

  fontSize = 14;
  @ViewChild('para', { static: true })
  para!: ElementRef;

  changeFont(operator: string) {
    alert('ขออภัย! ฟังก์ชันนี้ยังไม่พร้อมใช้งาน')
    operator === '+' ? this.fontSize++ : this.fontSize--;
    (this.para.nativeElement as HTMLParagraphElement).style.fontSize = `${this.fontSize}px`;

  }

  ngAfterViewInit() {


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

  onKeyUp() {
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

  onKeyDown() {

  }



}
