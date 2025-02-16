import { Component } from '@angular/core'
import { AppRoutes } from './constants/approutes'
import { AppRoutesNames } from './constants/approutesnames'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-signals';

  constructor(private router: Router) {


  }

  goToPage(pageName: string) {
    switch (pageName) {
      default:
        this.router.navigate([''])
        break
    }
  }
}
