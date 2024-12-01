import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTableModule, MatButtonModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-table-app';

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSources: MatTableDataSource<any>[] = [
    new MatTableDataSource(ELEMENT_DATA.slice()), // Initial table
  ];

  addTable() {
    // Add a new independent table
    this.dataSources.push(new MatTableDataSource(ELEMENT_DATA.slice()));
  }

  addRow(index: number) {
    const newRow = { position: 5, name: 'New Element', weight: 1.0079, symbol: 'H' };
    this.dataSources[index].data = [...this.dataSources[index].data, newRow];
  }

  removeRow(index: number) {
    const dataSource = this.dataSources[index];
    dataSource.data.pop();
    dataSource.data = [...dataSource.data];
  }
}

const ELEMENT_DATA = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' }
];
