import { Component, Input, signal } from '@angular/core'
import { Post } from '../../models/entities/post'
import { User } from '../../models/entities/user'
import { Comment } from '../../models/entities/comment'
import { faEye, faTags, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-postdetail',
  standalone: false,
  templateUrl: './postdetail.component.html',
  styleUrl: './postdetail.component.scss'
})
export class PostdetailComponent {
  @Input() selectedPost = signal<Post | null>(null)
  @Input() selectedUser = signal<User | null>(null)
  @Input() commentsSignal = signal<Comment[]>([])

  faEye = faEye
  faThumbsUp = faThumbsUp
  faThumbsDown = faThumbsDown
  faTags = faTags
}
