import * as React from 'react';
import { connect } from 'react-redux';

import { trackLink } from '../api';


export const Player = (props) => {
	console.log('PLAY', props);
	if (!props.track) {
		return <audio controls></audio>;
	}
	return (
		<audio src={trackLink(props.book.book_id, props.track.RecordFileName)} autoPlay controls></audio>
	)
}
