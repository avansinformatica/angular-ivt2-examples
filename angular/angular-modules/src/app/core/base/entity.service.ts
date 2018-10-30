import { Entity, Serializer, EntitySerializer } from "./entity.model";
import { Observable } from "rxjs";
import { Http } from "@angular/http";
import { HttpParams } from '@angular/common/http';
import { map, tap } from "rxjs/operators";

/**
 * Generic service class for communicating objects to/from services.
 * Serves generic CRUD operations.
 */
export class EntityService<T extends Entity> {

  /**
   * Service constructor. 
   * 
   * @param http Dependency injection http service
   * @param url The URL to communicate to.
   * @param endpoint The endpoint on the URL.
   * @param serializer The object that serializes the data.
   */
  constructor(
    private http: Http,
    private url: string,
    private endpoint: string,
    private serializer: Serializer<T>
  ) { }

  /**
   * Create the item at the service.
   * 
   * @param item Item to be created.
   */
  public create(item: T): Observable<T> {
    return this.http
      .post(`${this.url}/${this.endpoint}`, this.serializer.toJson(item)).pipe(
        map(data => this.serializer.fromJson(data) as T)
      )
  }

  /**
   * Get a single item from the service.
   * 
   * @param id ID of the item to get.
   */
  public read(id: number): Observable<T> {
    console.log('read ' + id)
    return this.http
      // .get(`${this.url}/${this.endpoint}/${id}`).pipe(
      .get(`${this.url}`).pipe(
        // map((data: any) => this.serializer.fromJson(data))
        tap(data => console.log(data))
        , map(data => data.json())
        , map(data => data.result[id])
      );
  }

  /**
   * Update (put) new info.
   * 
   * @param item The new item.
   */
  public update(item: T): Observable<T> {
    return this.http
      .put(`${this.url}/${this.endpoint}/${item.id}`, this.serializer.toJson(item)).pipe(
        map(data => this.serializer.fromJson(data) as T)
      )
  }

  /**
   * Get all items.
   * @param params 
   */
  public list(params: HttpParams): Observable<T[]> {
    return this.http
      // .get(`${this.url}/${this.endpoint}`, { params: params }).pipe(
      .get(`${this.url}`, { params: params }).pipe(
        map(data => data.json()),
        map(data => data.result)
        // , map(data => this.convertData(data))
      )
  }

  /**
   * Delete an item at the service.
   * 
   * @param id ID of item to be deleted.
   */
  public delete(id: number) {
    return this.http.delete(`${this.url}/${this.endpoint}/${id}`);
  }

  // private convertData(data: any): T[] {
  //   console.log('convert - is nu emtpy!')
  //   // return data.map(item => this.serializer.fromJson(item));
  //   return data.map(item => item);
  // }
}