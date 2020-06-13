import * as React from 'react';
import { connect } from 'react-redux';

import { Books } from './Books/';
import { TrackList } from './TrackList/';
import { TrackInfo } from './TrackInfo';
import { Player } from './Player';

export const App = (props) => {
	return (
		<div className="wrapper">
			<div className="content">
				<Books books={props.books} />
				<TrackList book={props.book} />
			</div>
			<div className="footer">
				<div className="footer-info">
					<TrackInfo book={props.book} track={props.track} />
				</div>
				<Player book={props.book} track={props.track} />
			</div>
		</div>
	);
}


export default connect(
	(state: any) => ({
		books: state.books,
		book: state.book,
		track: state.track,
	}),
	(dispatch) => ({}),
)(App);