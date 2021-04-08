/* eslint-disable react/jsx-pascal-case */
import React, { Dispatch } from 'react';
// import { Homepage } from './Desktop/index';
import { t, e } from '../Types';
import Main from './_Main';

export interface ContextProps {}

export enum act {}

export type initialState_type = {};

const reducer = (
    state: initialState_type,
    action: { type: act; payload?: any }
) => {
    let newState = { ...state };
    const { type, payload } = action;
    switch (type) {
        default:
            break;
    }
    return newState;
};

const initialState: initialState_type = {};
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
