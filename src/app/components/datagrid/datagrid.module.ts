import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { DatagridComponent } from "./datagrid.component"
import { GridModule } from '@coreui/angular'

@NgModule({
    imports: [
        CommonModule,
        GridModule
    ],
    exports: [
        DatagridComponent
    ],
    declarations: [
        DatagridComponent
    ],
    providers: []
})
export class DataGridModule { }