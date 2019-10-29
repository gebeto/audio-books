import * as React from 'react';
import { connect } from 'react-redux';

import { courseCoverLink } from '../api';


export class TrackInfo extends React.Component<{
	track: { title: string; };
	book: { book_id: any; };
}, any> {
	render() {
		const { track, book } = this.props;
		return (
			<div className="track-info">
				<div className="track-info-image">
					<img src={book.book_id ? courseCoverLink(book.book_id) : 'https://via.placeholder.com/150'} alt=""/>
				</div>
				<span className="track-info-title">{track.title || 'Пусто'}</span>
			</div>
		);
	}
}


export default connect(
	(state: any) => ({
		track: state.track,
		book: state.book,
	}),
	(dispatch) => ({}),
)(TrackInfo);