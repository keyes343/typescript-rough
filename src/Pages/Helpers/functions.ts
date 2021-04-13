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
export const exists_in_state_value = (btn: t.rootBtn, elem: t.radios) => {
    const state = UseState()!;
    const dispatch = UseDispatch()!;

    const grab_radio_from_state: t.radios[] = state[btn];

    const indx = grab_radio_from_state.indexOf(elem);
    return indx > -1;
};

const elem_to_api: { [key in t.rootBtn]: (elem: t.radios) => void } = {
    Ratings: (elem) => {
        switch (elem as t.ratings) {
            case 'All Ratings':
                return null;
            case '4.5 & above':
                return 'rating=4.5';
            case '4.0 & above':
                return 'rating=4';
            case '3.5 & above':
                return 'rating=3.5';
            case '3.0 & above':
                return 'rating=3';
            default:
                return null;
        }
    },
    'Discount Level': (elem) => {
        switch (elem as t.discountLevels) {
            case '>50%':
                return 'discount=50';
            case '100%':
                return 'discount=100';
            default:
                return null;
        }
    },
    Categories: () => {
        let txt = '';
        UseState()!.Categories.forEach((text, i) => {
            txt = txt + text + '|';
        });
        return `cat=${txt}`;
    },
    'Sub Categories': (elem) => {
        let txt = '';
        UseState()!.Categories.forEach((text, i) => {
            txt = txt + text + '|';
        });
        return `cat=${txt}`;
    },
    Level: (elem) => {
        //
    },
};

export const createApi = (btn: t.rootBtn, elem: t.radios) => {
    const {
        apis: {
            start,
            featured,
            sortDir,
            defaultLength,
            discount50,
            discount100,
        },
    } = vars;
    let apiString: string = `${start}&${featured}&${sortDir}&${defaultLength}&page=1${elem_to_api.Ratings}&${elem_to_api['Discount Level']}&${elem_to_api.Level}&${elem_to_api['Sub Categories']}`;
};
