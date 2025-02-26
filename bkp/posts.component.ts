import { Component, OnInit, signal, WritableSignal } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Post } from '../../models/entities/post'
import { PostsService } from '../../services/posts.service'
import { User } from '../../models/entities/user'
import { UserService } from '../../services/user.service'
import { CommentsService } from '../../services/comments.service'
import { Comment } from '../../models/entities/comment'


@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {
  userId: number | null = null;
  postsSignal = signal<Post[]>([])
  selectedPost = signal<Post | null>(null)
  selectedUser = signal<User | null>(null)
  commentsSignal = signal<Comment[]>([])

  constructor(private route: ActivatedRoute,
    private postsService: PostsService,
    private router: Router,
    private usersService: UserService,
    private commentsService: CommentsService) {
  }

  ngOnInit(): void {
    if (this.route.snapshot.params['userId'] !== undefined && this.route.snapshot.params['userId'] !== null) {
      this.userId = this.route.snapshot.params['userId']
      if (this.userId !== null) {
        this.getUserById(this.userId)
        this.getPostsByUser(this.userId)
      }
    } else {
      this.router.navigate([''])
    }
  }
  getUserById(userId: number) {
    this.usersService.getUserById(userId).subscribe(response => {
      this.selectedUser.set(response)
    })
  }

  getPostsByUser(userId: number): void {
    this.postsService.getPostsByUser(userId).subscribe(response => {
      this.postsSignal.set(response.posts)
    })
  }

  posts(): WritableSignal<Post[]> {
    return this.postsSignal
  }

  post(): WritableSignal<Post | null> {
    return this.selectedPost
  }

  user(): WritableSignal<User | null> {
    return this.selectedUser
  }

  onSelectedPost(post: Post) {
    this.selectedPost.set(post)
    this.commentsService.getCommentsByPost(post.id).subscribe(response => {
      this.commentsSignal.set(response.comments as Comment[])
    })
  }

  comments(): WritableSignal<Comment[]> {
    return this.commentsSignal
  }
}
