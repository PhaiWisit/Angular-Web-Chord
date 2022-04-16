// import { Component, OnInit } from '@angular/core';
// import { MdbTableDirective } from 'angular-bootstrap-md';
// import { MdbTablePaginationComponent } from 'angular-bootstrap-md';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Convert } from 'src/app/models/songWelcom';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  ress: any;

  constructor(
    private http: HttpClient,
  ) {

    this.http.get("https://node.kawpun.com/songs").subscribe(res => {


      const welcome = Convert.toWelcome(JSON.stringify(res));

      this.ress = JSON.stringify(res);

      alert(welcome[0].song_name);


    });


  }

  ngOnInit() {

  }





}
