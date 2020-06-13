import * as React from 'react';
import { TrackList } from './TrackList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


export default {
	title: 'TrackList',
};

const trackList = {
	book_id: 1,
	TracksListTitle: "Basic Track List",
	TracksList: [
		{
			RecordFileName: "01.mp3",
			RecordTitle: "Basic title 1",
		},
		{
			RecordFileName: "02.mp3",
			RecordTitle: "Basic title 2",
		},
		{
			RecordFileName: "03.mp3",
			RecordTitle: "Basic title 3",
		},
	]
};

export const basicTrackList = () => {
	const [ activeTrack, setActiveTrack ] = React.useState(trackList.TracksList[0]);

	return (
		<TrackList
			setTrack={(book, track) => {
				setActiveTrack(track);
			}}
			activeTrack={activeTrack}
			book={trackList}
		/>
	);
}
