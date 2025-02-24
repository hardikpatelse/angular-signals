import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { DatacardComponent } from "./datacard.component"
import { ButtonModule, CardBodyComponent, CardImgDirective, CardModule, CardTextDirective, CardTitleDirective, ColComponent, GutterDirective, ImgModule, RowComponent } from '@coreui/angular'

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
    ImgModule,
    ButtonModule
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