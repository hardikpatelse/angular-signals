import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { User } from '../models/entities/user'
import { map } from 'rxjs/internal/operators/map'
import { UserResponse } from '../models/responses/userresponse'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'https://dummyjson.com/users';
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<UserResponse>(`${this.baseUrl}`)
  }

  getUserById(id: number) {
    return this.http.get<User>(`${this.baseUrl}/${id}`)
  }

}
