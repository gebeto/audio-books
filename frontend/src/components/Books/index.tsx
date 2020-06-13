import Books from './Books';
import { connect } from 'react-redux';

import { getBooks, getBook } from '../../api';
import { actions } from '../../store';

import './index.scss';


export default connect(
	(state: any) => ({
		books: state.books,
	}),
	dispatch => ({

		fetchBooks() {
			getBooks().then((books: any) => {
				console.log(books);
				dispatch(actions.setBooks(books));
				// dispatch({
				// 	type: 'SET_BOOKS',
				// 	payload: books,
				// })
			});
		},

		selectBook(bookId) {
			getBook(bookId).then(book => {
				console.log('BBB', book);
				dispatch(actions.setBook({
					book_id: bookId,
					...book,
				}));
			});
		},

	}),
)(Books);