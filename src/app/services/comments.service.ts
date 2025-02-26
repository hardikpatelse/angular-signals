import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { CommentResponse } from '../models/responses/commentresponse'

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  baseUrl = 'https://dummyjson.com/comments';

  constructor(private http: HttpClient) { }

  getCommentsByPost(postId: number) {
    return this.http.get<CommentResponse>(`${this.baseUrl}/post/${postId}`)
  }
}
