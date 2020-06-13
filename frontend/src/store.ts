import { createStore, AnyAction, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { Book, BookItem, Track } from './api';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
	books: BookItem[],
	book: Book,
	track: Track,
}

const initialState: InitialState = {
	books: [],
	book: undefined,
	track: undefined,
}

const mainSlice = createSlice({
	name: 'main',
	initialState: initialState,
	reducers: {
		setBooks: (state, action) => ({
			...state,
			books: action.payload,
		}),
		setBook: (state, action) => ({
			...state,
			book: action.payload,
		}),
		setTrack: (state, action) => ({
			...state,
			track: action.payload,
		}),
	}
});


export const actions = mainSlice.actions;

// function globalReducer(state: any = initialState, action: AnyAction) {
// 	console.log(state, action);

// 	if (action.type === 'SET_BOOKS') {
// 		return {
// 			...state,
// 			books: action.payload,
// 		};
// 	} else if (action.type === 'SET_BOOK') {
// 		return {
// 			...state,
// 			book: action.payload,
// 		};
// 	} else if (action.type === 'SET_TRACK') {
// 		return {
// 			...state,
// 			track: action.payload,
// 		};
// 	} else if (false) {

// 	}

// 	return state;
// }


// export default createStore(globalReducer, composeWithDevTools());
// const reducers = combineReducers({
// 	main: mainSlice.reducers,
// });

export const store = createStore(mainSlice.reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
