import { BooksList as BooksListRaw } from './Books';
import { connect } from 'react-redux';

import { getBooks, getBook } from '../../api';
import { fetchBooks, selectBook } from '../../store';


export const BooksList = connect(
	undefined,
	{ fetchBooks, selectBook },
)(BooksListRaw);
