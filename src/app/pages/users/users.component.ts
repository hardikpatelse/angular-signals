import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user.service'
import { CardDataProperties } from '../../models/customs/carddataproperties'

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  cardDataSource: CardDataProperties[] = [];
  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    console.log('retrived users')
    this.userService.getUsers().subscribe((response) => {
      if (response.users.length > 0) {
        this.cardDataSource = []
        response.users.forEach(user => {
          this.cardDataSource.push({
            id: user.id,
            title: user.firstName + ' ' + user.lastName,
            image: user.gender === 'male'
              ? './assets/images/man.png'
              : './assets/images/woman.png',
            bodies: [user.company.name, user.company.title, user.email]
          })
        })
      }
    })
  }

}
