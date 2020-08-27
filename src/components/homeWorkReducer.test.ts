import {ArrayType, CheckArrayAC, hwReducer, SortArrayUpAC, SortArrayDownAC} from "./homeWorkReducer";

test('sort array up', () => {


    const startState: Array<ArrayType> = [
        {id: '1', name: 'B', age: 24},
        {id: '2', name: 'A', age: 29},
        {id: '3', name: 'Z', age: 23},
        {id: '4', name: 'D', age: 22},
    ]

    const endState = hwReducer(startState, SortArrayUpAC())

    const startUp = startState.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        // a должно быть равным b
        return 0;
    })

    expect(endState).toBe(startUp);

});

test('sort array down', () => {


    const startState: Array<ArrayType> = [
        {id: '1', name: 'B', age: 24},
        {id: '2', name: 'A', age: 29},
        {id: '3', name: 'Z', age: 23},
        {id: '4', name: 'D', age: 22},
    ]

    const endState = hwReducer(startState, SortArrayDownAC())

    const startDown = startState.sort(function (a, b) {
        if (a.name > b.name) {
            return -1;
        }
        if (a.name < b.name) {
            return 1;
        }
        // a должно быть равным b
        return 0;
    })

    expect(endState).toBe(startDown);

});

test('check array 18', () => {


    const startState: Array<ArrayType> = [
        {id: '1', name: 'B', age: 2},
        {id: '2', name: 'A', age: 29},
        {id: '3', name: 'Z', age: 23},
        {id: '4', name: 'D', age: 22},
    ]

    const endState = hwReducer(startState, CheckArrayAC())

    const startCheck = startState.filter(a => a.age >= 18)

    expect(endState).toStrictEqual(startCheck);
    expect(endState.length).toBe(3);

});