import * as React from 'react';
import { connect } from 'react-redux';

import { courseCoverLink } from '../api';

export interface TrackInfoProps {
	track: any;
	book: any;
}

export const TrackInfo = (props: TrackInfoProps) => {
	if (!props.track || !props.book) {
		return (
			<div className="track-info">
				<div className="track-info-image">
				</div>
				<span className="track-info-title">Пусто</span>
			</div>
		);
	}

	return (
		<div className="track-info">
			<div className="track-info-image">
				<img src={courseCoverLink(props.book.book_id)} alt=""/>
			</div>
			<span className="track-info-title">{props.track.RecordTitle}</span>
		</div>
	);
}


export default connect(
	(state: any) => ({
		track: state.track,
		book: state.book,
	}),
	(dispatch) => ({}),
)(TrackInfo);