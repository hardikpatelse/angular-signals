import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { CommentsComponent } from "./comments.component"
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
        CommentsComponent
    ],
    declarations: [
        CommentsComponent
    ],
    providers: []
})
export class CommentsModule { }