/* eslint-disable react/jsx-pascal-case */
import React, { Dispatch } from 'react';
// import { Homepage } from './Desktop/index';
// import { t, e } from '../Types';
import { t, f, vars } from '../index';
import axios from 'axios';

import {
    QueryClient,
    QueryClientProvider,
    QueryObserverResult,
    RefetchOptions,
    useQuery,
} from 'react-query';

import Main from '../Main';

export interface ContextProps {}

type act = 'rootBtn' | 'refetch-coupons';

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

    apiString: string;

    // below fields are not directly in state, but in self component, before render;
    // data?: t.card[];
    // isLoading?: boolean;
    // api?: string;
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
            newState.apiString = ''; // this step ensures a useEffect in 'CouponLogic.js'. This means apiString has been cleared, need a make new, based on new state buttons
            break;
        case 'refetch-coupons':
            newState.apiString = payload as string;
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
    apiString: '',
};
export const State = React.createContext<initialState_type | null>(null);
export const Dispatcher = React.createContext<Dispatch<{
    type: act;
    payload?: any;
}> | null>(null);

const Context: React.FC<ContextProps> = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    // const api = f.useCreateApi(state).apiString;

    // const { data, isLoading, error, refetch } = useQuery('getData', apiCall);

    return (
        <State.Provider value={{ ...state }}>
            <Dispatcher.Provider value={dispatch}>
                <Main />
            </Dispatcher.Provider>
        </State.Provider>
    );
};

const UseState = () => {
    const ctx = React.useContext(State);
    return ctx;
};
const UseDispatch = () => {
    const ctx = React.useContext(Dispatcher);
    return ctx;
};

export { Context, UseDispatch, UseState };
