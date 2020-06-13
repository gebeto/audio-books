import { connect } from 'react-redux';
import { TrackList as TrackListRaw } from './TrackList';

import { setTrack } from '../../store';

import './index.scss';


export const TrackList = connect(
	state => ({
		activeTrack: state.track,
	}),
	{ setTrack },
)(TrackListRaw);