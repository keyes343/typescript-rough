/* eslint-disable react/jsx-pascal-case */
import React, { Dispatch } from 'react';
// import { Homepage } from './Desktop/index';
// import { t, e } from '../Types';
import * as t from './types';
import * as f from './functions';

import Main from './Main';

export interface ContextProps {}

type act = 'rootBtn';

// Ratings: t.ratings[];
// 'Discount Level': t.discountLevels[];
// Categories: t.categories[];
// 'Sub Categories': t.subCategories[];
// Level: t.levels[];
export type btns = {
    [key in t.rootBtn]: t.radios;
};

export interface initialState_type {
    Ratings: t.ratings[];
    'Discount Level': t.discountLevels[];
    Categories: t.categories[];
    'Sub Categories': t.subCategories[];
    Level: t.levels[];
}

// type payload_filters<T> = {
//     [key in keyof T]: string;
// };

const reducer = (
    state: initialState_type,
    action: { type: act; payload?: any }
) => {
    let newState = { ...state };
    const { type, payload } = action;
    switch (type) {
        case 'rootBtn':
            const { btn } = payload as t.toggleRadios;
            const newArray = f.toggleArray(payload as t.toggleRadios, newState);
            newState[btn] = newArray as any;
            break;
        default:
            break;
    }
    return newState;
};

const initialState: initialState_type = {
    Ratings: [],
    'Discount Level': [],
    Categories: [],
    'Sub Categories': [],
    // | 'Topics'
    Level: [],
};
export const c2state = React.createContext<initialState_type | null>(null);
export const c2dispatch = React.createContext<Dispatch<{
    type: act;
    payload?: any;
}> | null>(null);

const Context: React.FC<ContextProps> = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <c2state.Provider value={{ ...state }}>
            <c2dispatch.Provider value={dispatch}>
                <Main />
            </c2dispatch.Provider>
        </c2state.Provider>
    );
};

const UseState = () => {
    const ctx = React.useContext(c2state);
    return ctx;
};
const UseDispatch = () => {
    const ctx = React.useContext(c2dispatch);
    return ctx;
};

export { Context, UseDispatch, UseState };
