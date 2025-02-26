import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { PostslistComponent } from "./postslist.component"
import { BadgeModule, GridModule, HeaderModule } from "@coreui/angular"
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
    imports: [
        CommonModule,
        GridModule,
        FontAwesomeModule,
        HeaderModule,
        BadgeModule
    ],
    exports: [
        PostslistComponent
    ],
    declarations: [
        PostslistComponent
    ],
    providers: []
})
export class PostsListModule { }