import {
    GET_ARTISTS_ALL,
    GET_ARTISTS_SEARCH,
    GET_ARTIST_DETAIL,
    CLEAR_ARTIST_DETAIL
} from '../types';

import axios from 'axios';
const URL = 'http://localhost:3004';

export function artistsListAll(){
    const request = axios.get(`${URL}/artists?_limit=6`)
                    .then( response => response.data );

    return {
        type: GET_ARTISTS_ALL,
        payload: request
    }
}

export function artistListSearch(keywords){
    const request = axios.get(`${URL}/artists?q=${keywords}&&_limit=6`)
                    .then( response => response.data);

        return {
            type: GET_ARTISTS_SEARCH,
            payload: request
        }                

}

export function artistDetail(id){
    const request = axios.get(`${URL}/artists?id=${id}`)
                    .then(response => response.data )
    
    return {
        type: GET_ARTIST_DETAIL,
        payload: request
    }
}

export function clearArtistDetail(){
    return {
        type: CLEAR_ARTIST_DETAIL,
        payload:null
    }
}