import {
    NEW_MOVIE_FULFILLED,
    NEW_MOVIE_REJECTED,
    NEW_MOVIE_PENDING,

    FETCH_MOVIE_FULFILLED,
    FETCH_MOVIE_REJECTED,
    FETCH_MOVIE_PENDING,

    UPDATE_MOVIE_FULFILLED,
    UPDATE_MOVIE_REJECTED,
    UPDATE_MOVIE_PENDING
} from '../actions/newMovie';

const initialState = {
    fetching: false,
    movies: [],
    done: false,
    error: {},
    movie: {
        fetching: false
    }

};
export default (state = initialState, action) => {
    switch (action.type) {
        case NEW_MOVIE_PENDING:
            return {
                ...state,
                fetching: true
            }
        case NEW_MOVIE_FULFILLED:
            return {
                ...state,
                done: true,
                fetching: false
            }
        case NEW_MOVIE_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false

            }


        //FETCH_MOVIE

        case FETCH_MOVIE_PENDING:
            return {
                ...state,
                movie: {
                    fetching: true
                }
            }
        case FETCH_MOVIE_FULFILLED:
            return {
                ...state,
                movie: {
                    ...action.payload.movie,
                    fetching: false
                }
            }
        case FETCH_MOVIE_REJECTED:
            return {
                ...state,
                movie: {
                    fetching: false
                }
            }

        //Update
        case UPDATE_MOVIE_PENDING:
            return {
                ...state,
                fetching: true

            }
        case UPDATE_MOVIE_FULFILLED:
            return {
                ...state,
                fetching: false

            }
        case UPDATE_MOVIE_REJECTED:
            return {
                ...state,
                fetching: false
            }
        default:
            return state;
    };
}; 