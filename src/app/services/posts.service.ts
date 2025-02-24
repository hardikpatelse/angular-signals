import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Post } from '../models/entities/post'
import { PostResponse } from '../models/responses/postresponse'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl = 'https://dummyjson.com/posts';
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<PostResponse>(`${this.baseUrl}`)
  }

  getPostById(id: number) {
    return this.http.get<Post>(`${this.baseUrl}/${id}`)
  }

  getPostsByUser(userId: number) {
    return this.http.get<PostResponse>(`${this.baseUrl}/user/${userId}`)
  }
}
