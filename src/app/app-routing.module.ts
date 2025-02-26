import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppRoutes } from './constants/approutes'
import { PageTitles } from './constants/pagetitles'

const routes: Routes = [
  {
    path: AppRoutes.Home,
    loadChildren: () => import('./pages/users/users.module').
      then(mod => mod.UsersModule),
    title: PageTitles.UsersTitle
  },
  {
    path: `${AppRoutes.Posts}/:userId`,
    loadChildren: () => import('./pages/posts/posts.module').
      then(mod => mod.PostsModule),
    title: PageTitles.PostTitle
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
