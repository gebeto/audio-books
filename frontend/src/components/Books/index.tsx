import { Books as BooksRaw } from './Books';
import { BooksList as BooksListRaw } from './Books';
import { connect } from 'react-redux';

import { getBooks, getBook } from '../../api';
import { actions, fetchBooks, selectBook } from '../../store';


export const Books = connect(
	undefined,
	{ fetchBooks, selectBook },
)(BooksRaw);

export const BooksList = connect(
	undefined,
	{ fetchBooks, selectBook },
)(BooksListRaw);
