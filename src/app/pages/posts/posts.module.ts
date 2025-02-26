import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { PostsComponent } from "./posts.component"
import { PostsRoutingModule } from "./posts-routing.module"
import { BadgeModule, GridModule, HeaderModule } from "@coreui/angular"
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { PostsListModule } from "../../components/postslist/postslist.module"
import { PostsDetailModule } from "../../components/postdetail/postdetail.module"
import { CommentsModule } from "../../components/comments/comments.module"

@NgModule({
    imports: [
        PostsRoutingModule,
        CommonModule,
        GridModule,
        FontAwesomeModule,
        HeaderModule,
        BadgeModule,
        PostsListModule,
        PostsDetailModule,
        CommentsModule
    ],
    exports: [
        PostsComponent
    ],
    declarations: [
        PostsComponent
    ],
    providers: []
})
export class PostsModule { }