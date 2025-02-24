import { Component, Input, signal } from '@angular/core'
import { Comment } from '../../models/entities/comment'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-comments',
  standalone: false,
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {
  @Input() comments = signal<Comment[]>([])

  faThumbsUp = faThumbsUp

}
