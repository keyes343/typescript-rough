import { Box, Grid } from '@material-ui/core';
import * as React from 'react';
import { t, f, hooks, UseState, UseDispatch, vars } from '../index';
import { useState, useEffect } from 'react';
import CouponCard from './CouponCard';
import { useQuery } from 'react-query';
import axios from 'axios';

export interface CouponLogicProps {
    // btn: t.rootBtn,
}

const CouponLogic: React.FC<CouponLogicProps> = (props: CouponLogicProps) => {
    // check conditions that satisfy a cards visibility.
    // for that, check which radios are clicked by user. ( grab mainOptions and subOptions )
    // Then, arrange heirarchy of radio-clicked (keywords clicked), as per the api(s) in tom's site.
    // insert those keywords into a string. GET request on this new string.
    // returned object contains whatever needs to be filtered. See if sorting is required.

    const state = UseState()!;
    const dispatch = UseDispatch()!;
    const [cards, setCards] = useState<t.card[] | null>(null);

    const elem_to_api = React.useCallback(
        (btn: t.rootBtn, subOption: t.radios) => {
            let txt = '';
            switch (btn) {
                case 'Ratings':
                    switch (subOption as t.ratings) {
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
                case 'Discount Level':
                    switch (subOption as t.discountLevels) {
                        case '>50%':
                            return 'discount=50';
                        case '100%':
                            return 'discount=100';
                        default:
                            return null;
                    }
                case 'Categories':
                    state.Categories.forEach((text, i) => {
                        txt = txt + text + '|';
                    });
                    return `cat=${txt}`;
                case 'Sub Categories':
                    state['Sub Categories'].forEach((text, i) => {
                        txt = txt + text + '|';
                    });
                    return `cat=${txt}`;
                case 'Level':
                    state.Level.forEach((text, i) => {
                        txt = txt + text + '|';
                    });
                    return `cat=${txt}`;
                default:
                    return null;
            }
        },
        [state]
    );

    const createApi = React.useCallback(() => {
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

        let apiString: string = `${start}&${featured}&${sortDir}&${defaultLength}`;
        console.log('Step - creatingApi');

        if (state.Ratings.length > 0) {
            let tempString = state.Ratings.map((subOption, i) => {
                return elem_to_api('Ratings', subOption);
            });
            apiString = `${apiString}${
                tempString.length > 0 ? `&${tempString}` : null
            }`;
        }
        console.log('rating done');

        if (state['Discount Level'].length > 0) {
            let tempString = state['Discount Level'].map((subOption, i) => {
                return elem_to_api('Discount Level', subOption);
            });
            apiString = `${apiString}${
                tempString.length > 0 ? `&${tempString}` : null
            }`;
        }
        console.log('discount done');
        if (state['Sub Categories'].length > 0) {
            let tempString = state['Sub Categories'].map((subOption, i) => {
                return elem_to_api('Sub Categories', subOption);
            });
            apiString = `${apiString}${
                tempString.length > 0 ? `&${tempString}` : null
            }`;
            console.log('Clicked', apiString, tempString);
        }
        console.log('sub category done');
        if (state.Categories.length > 0) {
            let tempString = state.Categories.map((subOption, i) => {
                return elem_to_api('Categories', subOption);
            });
            apiString = `${apiString}${
                tempString.length > 0 ? `&${tempString}` : null
            }`;
        }
        console.log('categories done');
        if (state.Level.length > 0) {
            let tempString = state.Level.map((subOption, i) => {
                return elem_to_api('Level', subOption);
            });
            apiString = `${apiString}${
                tempString.length > 0 ? `&${tempString}` : null
            }`;
        }
        console.log('level done');

        dispatch({ type: 'refetch-coupons', payload: apiString });
        return apiString; // return here, is not needed if this function is never called outside useEffect.
        // Calling this function outside useEffect simply checks active-buttons in state and makes returns a plain string api, that needs to be called via axios.
    }, [dispatch, elem_to_api, state]);

    const apiCall = React.useCallback(async () => {
        console.log('step 1');
        const {
            data,
            status,
        }: {
            data: { results: t.card[] } | undefined;
            status: number;
        } = await axios.get(createApi());
        console.log('step 2');
        console.log({ data, status });

        // return data?.results;
        setCards(data?.results ?? null);
    }, [createApi]);

    // const {data,isLoading,error,refetch}

    // onMount, check if apiString in State is true. If not, refetch is needed.
    useEffect(() => {
        if (!state.apiString) {
            apiCall();
        }
    }, [apiCall, state.apiString]);

    return (
        <Grid container direction="row" style={{ gap: '1rem' }}>
            {cards &&
                cards.map((d, i) => {
                    return (
                        <Box key={i}>
                            <CouponCard card={d} />
                        </Box>
                    );
                })}
        </Grid>
    );
};

export default CouponLogic;
