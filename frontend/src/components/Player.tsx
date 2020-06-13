import * as React from 'react';
import { connect } from 'react-redux';

import { trackLink } from '../api';
import ReactHowler from 'react-howler';
import raf from 'raf';


export const Player = (props) => {
	if (!props.track) {
		return <audio controls></audio>;
	}
	return (
		<audio src={trackLink(props.book.book_id, props.track.RecordFileName)} autoPlay controls></audio>
	)
}

export default connect(
	(state: any) => ({
		track: state.track,
		book: state.book,
	}),
	(dispatch: any) => ({}),
)(Player);