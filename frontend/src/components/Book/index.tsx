import { connect } from 'react-redux';
import Book from './Book';

import { actions } from '../../store';

import './index.scss';


export default connect(
	(state: any) => ({
		book: state.book,
	}),
	(dispatch: any) => ({
		setTrack(book, track) {
			dispatch(actions.setTrack(track));
			// actions.setTrack({
			// 	book_id: book.book_id,
			// 	title: track.RecordTitle,
			// 	file: track.RecordFileName,
			// });
		},
	}),
)(Book);