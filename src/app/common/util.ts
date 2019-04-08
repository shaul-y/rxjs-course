import { Observable } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpClientModule
} from "@angular/common/http";

export function createHttpObservable(url: string) {
  let headers = new HttpHeaders();
  headers.append("Content-Type", "application/json");
  headers.append("'Access-Control-Allow-Origin", `*`);

  return this.http.get(url, headers);
  // return Observable.create(observer => {

  //     const controller = new AbortController();
  //     const signal = controller.signal;

  //     fetch(url, {signal})
  //         .then(response => {

  //             if (response.ok) {
  //                 return response.json();
  //             }
  //             else {
  //                 observer.error('Request failed with status code: ' + response.status);
  //             }
  //         })
  //         .then(body => {

  //             observer.next(body);

  //             observer.complete();

  //         })
  //         .catch(err => {

  //             observer.error(err);

  //         });

  //     return () => controller.abort()

  // });
}
