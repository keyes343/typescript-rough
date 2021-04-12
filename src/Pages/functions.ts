import * as t from './types';
import { initialState_type } from './state';

export const toggleArray = (
    payload: t.toggleRadios,
    newState: initialState_type
) => {
    const { btn, elem } = payload;
    // const { ratings, discounts, categories, subCategories, levels } = newState;
    let radioArray: t.radios[] = newState[btn];
    let indx: number;
    // switch (btn) {
    //     case 'Ratings':
    //         radioArray = [...ratings];
    //         break;
    //     case 'Categories':
    //         radioArray = [...categories];
    //         break;
    //     case 'Discount Level':
    //         radioArray = [...discounts];
    //         break;
    //     case 'Level':
    //         radioArray = [...levels];
    //         break;
    //     case 'Sub Categories':
    //         radioArray = [...subCategories];
    //         break;
    //     default:
    //         break;
    // }
    indx = radioArray.indexOf(elem);
    indx > -1
        ? radioArray.splice(indx, 1)
        : (radioArray = [elem, ...radioArray]);

    return radioArray;
};

export const exists = (arr: any[], elem: string) => {
    const indx = arr.indexOf(elem);
    return indx > -1;
};
