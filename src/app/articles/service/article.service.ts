import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../model/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'http://127.0.0.1:8000/articles';
  constructor(private http: HttpClient) {}
    getAll(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }

  getById(id: number): Observable<Article> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Article>(url);
  }
}
