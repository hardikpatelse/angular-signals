import { Component, Input } from '@angular/core'
import { DataGridColumns } from '../../models/customs/datagridcolumns'

@Component({
  selector: 'app-datagrid',
  standalone: false,
  templateUrl: './datagrid.component.html',
  styleUrl: './datagrid.component.scss'
})
export class DatagridComponent {
  @Input() dataSource!: any[]
  @Input() dataGridColumns: DataGridColumns[] = [];
}
