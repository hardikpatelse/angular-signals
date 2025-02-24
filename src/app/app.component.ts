import { Component, OnInit } from '@angular/core'
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-signals';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  goToPage(pageName: string) {
    switch (pageName) {
      default:
        this.router.navigate([''])
        break
    }
  }
}
