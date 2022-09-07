import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-type-ahead-search',
  templateUrl: './type-ahead-search.component.html',
  styleUrls: ['./type-ahead-search.component.css'],
})
export class TypeAheadSearchComponent implements OnInit {
  inputCtrl = new FormControl('');
  userData = [];

  filterText = '';
  constructor(private _DataService: DataService) {}

  ngOnInit() {
    this._DataService
      .fetchUserData()
      .subscribe((res) => (this.userData = [...res]));

    this.inputCtrl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((val) => (this.filterText = val));
  }
}
