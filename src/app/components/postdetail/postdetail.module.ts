import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { PostdetailComponent } from "./postdetail.component"
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
        PostdetailComponent
    ],
    declarations: [
        PostdetailComponent
    ],
    providers: []
})
export class PostsDetailModule { }