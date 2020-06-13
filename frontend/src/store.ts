import { createStore, AnyAction, applyMiddleware, combineReducers } from 'redux';
import { batch } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { createSlice } from '@reduxjs/toolkit';
import { Book, BookItem, Track, getBooks, getBook } from './api';

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

export const fetchBooks = () => dispatch => {
	getBooks().then((books: any) => {
		dispatch(actions.setBooks(books));
	});
}

export const selectBook = (bookId) => dispatch => {
	getBook(bookId).then(book => {
		dispatch(actions.setBook({
			book_id: bookId,
			...book,
		}));
	});
}

export const resetBook = (bookId) => dispatch => {
	batch(() => {
		dispatch(actions.setBook(undefined));
		dispatch(actions.setTrack(undefined));
	})
}

export const setTrack = (book, track) => dispatch => {
	dispatch(actions.setTrack(track));
}


export const store = createStore(mainSlice.reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
