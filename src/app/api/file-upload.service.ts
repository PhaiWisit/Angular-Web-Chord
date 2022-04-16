import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  // API url
  baseApiUrl = "http://192.168.1.104:5000/upload"

  constructor(private http: HttpClient) { }

  // Returns an observable
  upload(file: any): Observable<any> {

    // Create form data
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append("file", file, file.name);

    // Make http post request over api
    // with formData as req
    return this.http.post(this.baseApiUrl, formData)
  }
}
