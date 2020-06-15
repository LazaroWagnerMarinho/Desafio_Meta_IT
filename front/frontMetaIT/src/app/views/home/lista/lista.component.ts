import {SelectionModel} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  position: number;
  nome: string;
  email: string;
  dtIncl: string;
  dtAlt: string;
  regra: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nome: 'ANPINA', email: 'antonio.pina@tvglobo.com.br', dtIncl: '28/05/2019', dtAlt: '30/05/2019', regra: 1, status: "ATIVO"},
  {position: 2, nome: 'CCHANG', email: 'ciro.chang@tvglobo.com.br', dtIncl: '28/05/2019', dtAlt: '30/05/2019', regra: 1, status: "ATIVO"},
  {position: 3, nome:'TMARCAL', email: 'thiago.marcal@tvglobo.com.br', dtIncl: '28/05/2019', dtAlt: '30/05/2019', regra: 1, status: "ATIVO"},
  {position: 4, nome:'ECGIANN', email: 'ecgiannotto@tvglobo.com.br', dtIncl: '28/05/2019', dtAlt: '30/05/2019', regra: 1, status: "ATIVO",},
  {position: 5, nome:'YFERNAND', email: 'yuri.vasquez@tvglobo.com.br', dtIncl: '28/05/2019', dtAlt: '30/05/2019', regra: 2, status: "ATIVO",},
  {position: 6, nome:'PLACERDA', email: 'pedro.soares@tvglobo.com.br', dtIncl: '28/05/2019', dtAlt: '30/05/2019', regra: 2, status: "ATIVO",},
];


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  displayedColumns: string[] = ['select', 'position', 'nome', 'email', 'dtIncl', 'dtAlt','regra', 'status'  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}