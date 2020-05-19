import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss']
})
export class MyTableComponent implements OnInit {
  @Input() tableData;
  @Input() columnHeader;
  @Input() parseDate;
  objectKeys = Object.keys;
  dataSource;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.tableData);
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  init(data) {
    this.tableData = data;
    this.ngOnInit();
  }

  isDate(val) {
    if (this.parseDate === true && typeof val === 'object') {
      return true;
    } else {
      return false;
    }
  }

  checkIfIncludesHttps(element) {
    if (typeof element === 'string') {
      if (element.includes('https')) {
        console.log(typeof element);
        return true;
      }
    }
    return false;
  }
}
