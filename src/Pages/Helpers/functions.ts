import * as t from '../types';
import { initialState_type } from './state';
import { UseState, UseDispatch } from '../index';
import { vars } from '../index';

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

// mainly used by material-ui-radio to check if it should stay on or off.
export const exists_in_state_value = (
    state: initialState_type,
    btn: t.rootBtn,
    elem: t.radios
) => {
    const grab_radio_from_state: t.radios[] = state[btn];

    const indx = grab_radio_from_state.indexOf(elem);
    return indx > -1;
};

// export const useCreateApi = (state: initialState_type) => {
//     const {
//         apis: {
//             start,
//             featured,
//             sortDir,
//             defaultLength,
//             discount50,
//             discount100,
//         },
//     } = vars;

//     let apiString: string = `${start}&${featured}&${sortDir}&${defaultLength}`;

//     if (state.Ratings.length > 0) {
//         let tempString = state.Ratings.map((rate, i) => {
//             return elem_to_api.Ratings(rate);
//         });
//         apiString = `${apiString}&${tempString}`;
//     }
//     if (state['Discount Level'].length > 0) {
//         let tempString = state['Discount Level'].map((rate, i) => {
//             return elem_to_api.Ratings(rate);
//         });
//         apiString = `${apiString}&${tempString}`;
//     }
//     if (state['Sub Categories'].length > 0) {
//         let tempString = state['Sub Categories'].map((rate, i) => {
//             return elem_to_api['Sub Categories'](rate);
//         });
//         apiString = `${apiString}&${tempString}`;
//         console.log('Clicked', apiString, tempString);
//     }
//     if (state.Categories.length > 0) {
//         let tempString = state.Categories.map((rate, i) => {
//             return elem_to_api.Ratings(rate);
//         });
//         apiString = `${apiString}&${tempString}`;
//     }
//     if (state.Level.length > 0) {
//         let tempString = state.Level.map((rate, i) => {
//             return elem_to_api.Ratings(rate);
//         });
//         apiString = `${apiString}&${tempString}`;
//     }

//     return { apiString };
// };
