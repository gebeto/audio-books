import { connect } from 'react-redux';
import { TrackList as TrackListRaw } from './TrackList';
import { TrackListModal } from './TrackListModal';

import { setTrack, resetBook } from '../../store';

import './index.scss';


export const TrackList = connect(
	state => ({
		activeTrack: state.track,
	}),
	{
		setTrack,
		handleClose: resetBook },
)(TrackListModal);