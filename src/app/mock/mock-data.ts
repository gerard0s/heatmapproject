import { of } from "rxjs";

export const source1 = of({
    title: '',
    rowLabels: [
        'row 1',
        'row 2',
        'row 3',
        'row 4',
        'row 5',
    ],
    columnLabels: [
        'col 1',
        'col 2',
        'col 3',
        'col 4'
    ],
    data: [
        [1,2,8,12],
        [2,4,8,90],
        [3,4,2,6],
        [1,3,44,66],
        [0,9,23,123]
    ]
});

export const source2 = of(
    {
        title: 'some title',
        rowLabels: [
            'row 1',
            'row 2',
            'row 3',
            'row 4',
            'row 5',
        ],
        columnLabels: [
            'col 1',
            'col 2',
            'col 3',
            'col 4',
            'col 5',
        ],
        data: [
            [4,23,4,112,12],
            [4,13,0,90,15],
            [34,52,0,6,63],
            [31,4,4,6,1],
            [110,3,4,12,99]
        ]
    }
);

export const source3 = of(
    {
        title: 'Calls received per department in the last 10 moths',
        rowLabels : [
            'Department 1',
            'Department 2',
            'Department 3',
            'Department 4'
        ],
        columnLabels : [
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        data: [
            [23,215,77,15,43,50,59,32,255,122],
            [233,313,66,11,43,270,365,32,155,200],
            [353,33,96,191,63,270,365,62,355,200],
            [123,233,256,113,243,70,65,132,255,100]
        ]
    }
);
