import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { DatacardComponent } from "./datacard.component"
import { CardBodyComponent, CardImgDirective, CardModule, CardTextDirective, CardTitleDirective, ColComponent, GutterDirective, ImgModule, RowComponent } from '@coreui/angular'

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    RowComponent,
    GutterDirective,
    ColComponent,
    CardImgDirective,
    CardBodyComponent,
    CardTitleDirective,
    CardTextDirective,
    ImgModule
  ],
  exports: [
    DatacardComponent
  ],
  declarations: [
    DatacardComponent
  ],
  providers: []
})
export class DataCardModule { }