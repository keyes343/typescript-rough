import { Box, Grid, makeStyles, createStyles, Theme } from '@material-ui/core';
import { UseState, UseDispatch, vars, t, f } from '../index';

export const useStyles = makeStyles({
    root: {
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: '2px solid',
    },
    fillScreen: { height: '100vh' },
    fillParent: { height: '100%', width: '100%' },
    red: { border: '3px solid red' },
    blue: { border: '3px solid blue' },
    orange: { border: '3px solid orange' },
    green: { border: '3px solid green' },

    gridColumn: {
        display: 'grid',
        gridTemplateColumns: '1fr 8fr',
        // border:'2px solid red'
    },
    left_innerWraper: {
        display: 'grid',
        gap: '0.5rem',
        gridTemplateColumns: '1fr',
        justifyContent: 'flex-start',
    },
    slowReveal: {
        transition: 'all 0.5s ease-in-out',
    },
});

// : React.FC<createApiiProps>

// export const createApi = () => {

// const dispatch = UseDispatch()!;

// let apiStringa: string = `${start}&${featured}&${sortDir}&${defaultLength}&page=1${elem_to_api.Ratings}&${elem_to_api['Discount Level']}&${elem_to_api.Level}&${elem_to_api['Sub Categories']}`;
// };
