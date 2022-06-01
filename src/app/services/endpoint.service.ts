import { Injectable } from '@angular/core';
import { Values } from 'src/utils/values';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor(
    private http: HttpClient
  ) { }

  private URL = Values.SERVER_URL + Values.SERVER_PORT + Values.ENTRY_FILE;

  public getAllMethodChunk() {
    const request = this.URL + Values.RESOURCES.METHOD_CHUNK;
    return this.http.get<any[]>(request).pipe(map(response => response));
  }

  public getMethodChunkById(id: string) {
    const request = this.URL + Values.RESOURCES.METHOD_CHUNK + '/' + id;
    return this.http.get<any[]>(request).pipe(map(response => response));
  }

  public getAllMethodElementsByType(type) {
    const request = this.URL + Values.RESOURCES.METHOD_ELEMENT + '?type=' + type;
    return this.http.get<any[]>(request).pipe(map(response => response));
  }

  public getMethodElement(id) {
    const request = this.URL + Values.RESOURCES.METHOD_ELEMENT + '/' + id;
    return this.http.get<any[]>(request).pipe(map(response => response));
  }

  public updateMethodElement(id, data) {
    const request = this.URL + Values.RESOURCES.METHOD_ELEMENT + '/' + id;
    return this.http.put<any[]>(request, data).pipe(map(response => response));
  }

  public addMethodElement(data) {
    const request = this.URL + Values.RESOURCES.METHOD_ELEMENT;
    return this.http.post<any[]>(request, data).pipe(map(response => response));
  }

  public deleteMethodElement(id) {
    const request = this.URL + Values.RESOURCES.METHOD_ELEMENT + '/' + id;
    return this.http.delete<any[]>(request).pipe(map(response => response));
  }

}
