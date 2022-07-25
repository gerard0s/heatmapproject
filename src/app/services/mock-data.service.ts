import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { source1, source2, source3 } from '../mock/mock-data';

@Injectable({
    providedIn: "root",
})
export class MockDataService {

    constructor() {}

    getMockData1(): Observable<any> {
        return source1;
    }

    getMockData2(): Observable<any> {
        return source2;
    }

    getMockData3(): Observable<any> {
        return source3;
    }

}
