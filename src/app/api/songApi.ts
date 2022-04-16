import { HttpClient } from "@angular/common/http";

export class SongApi {

  _Host: string = 'http://node.kawpun.com/songs';

  constructor(private http: HttpClient) { }


  public getSongList() {
    return new Promise((resolve, reject) => {
      let url = this._Host;
      this.http.get(url)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


}
