import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { UsersComponent } from "./users.component"
import { DataCardModule } from "../../components/datacard/datacard.module"
import { UsersRoutingModule } from "./users-routing.module"

@NgModule({
    imports: [
        UsersRoutingModule,
        CommonModule,
        DataCardModule
    ],
    exports: [
        UsersComponent
    ],
    declarations: [
        UsersComponent
    ],
    providers: []
})
export class UsersModule { }