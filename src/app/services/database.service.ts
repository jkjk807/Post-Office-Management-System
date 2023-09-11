import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
const URL = "http://localhost:8081"
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  constructor(private http: HttpClient) { }

  getSenders() {
    return this.http.get(URL + "/sender");
  }
  createSender(data: any) {
    return this.http.post(URL + "/sender", data, httpOptions);
  }


  getParcels() {
    return this.http.get(URL + "/parcel");
  }
  createParcel(data: any) {
    return this.http.put(URL + "/sender/parcel", data, httpOptions);
  }
  deleterSender(data: any) {
    return this.http.delete(URL + "/sender/"+data, data);
  }

}
