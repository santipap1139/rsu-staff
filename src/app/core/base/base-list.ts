import { ViewChild } from '@angular/core';

import { MatSort } from '@angular/material/sort';

import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment.prod';

export class BaseList {
    isProduction = environment.production
    @ViewChild(MatSort, {static: true}) sort: MatSort;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    constructor() {
        
    }
}