import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CardDataProperties } from '../../models/customs/carddataproperties'

@Component({
  selector: 'app-datacard',
  standalone: false,
  templateUrl: './datacard.component.html',
  styleUrl: './datacard.component.scss'
})
export class DatacardComponent {
  @Input() dataSource!: CardDataProperties[]
  @Output() onSelectedData = new EventEmitter<number>()

  onCardClick(id: number): void {
    this.onSelectedData.emit(id)
  }
}
