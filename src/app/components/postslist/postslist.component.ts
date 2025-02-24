import { Component, EventEmitter, Input, Output, signal } from '@angular/core'
import { Post } from '../../models/entities/post'
import { faEye, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-postslist',
  standalone: false,
  templateUrl: './postslist.component.html',
  styleUrl: './postslist.component.scss'
})
export class PostslistComponent {
  @Input() posts = signal<Post[]>([])
  @Input() selectedPost = signal<Post | null>(null)
  @Output() onSelectedPost = new EventEmitter<Post>()

  faEye = faEye
  faThumbsUp = faThumbsUp
  faThumbsDown = faThumbsDown

  postSelected(post: Post): void {
    if (post.id !== 0) {
      this.onSelectedPost.emit(post)
    }
  }
}
