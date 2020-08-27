import React from "react";

export type ArrayType = {
    id: string,
    name: string,
    age: number
}

export type SortArrayActionType = {
    type: 'SORT',
    payload: any
}

export type CheckArrayActionType = {
    type: 'CHECK',
    payload: any
}

type ActionsType = SortArrayActionType | CheckArrayActionType

export const hwReducer =
    (state: Array<ArrayType>, action: ActionsType) => {
        switch (action.type) {
            case 'SORT':
                if (action.payload === 'up') {
                    return [...state.sort(function (a, b) {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                        // a должно быть равным b
                        return 0;
                    })
                ]}
                if (action.payload === 'down') {
                    return [...state.sort(function (a, b) {
                        if (a.name > b.name) {
                            return -1;
                        }
                        if (a.name < b.name) {
                            return 1;
                        }
                        // a должно быть равным b
                        return 0;
                    })]
                }
            case 'CHECK' :
                return state.filter(a => a.age >= action.payload)
            default:
                throw new Error("I don't understand this type")
        }
    };

export const SortArrayUpAC = (): SortArrayActionType => {
    return { type: 'SORT',  payload: 'up'}
}

export const SortArrayDownAC = (): SortArrayActionType => {
    return { type: 'SORT',  payload: 'down'}
}

export const CheckArrayAC = (): CheckArrayActionType => {
    return { type: 'CHECK',  payload: 18}
}