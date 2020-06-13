import { Books as BooksRaw } from './Books';
import { connect } from 'react-redux';

import { getBooks, getBook } from '../../api';
import { actions, fetchBooks, selectBook } from '../../store';

import './index.scss';


export const Books = connect(
	undefined,
	{ fetchBooks, selectBook },
)(BooksRaw);