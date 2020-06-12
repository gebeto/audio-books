import * as React from 'react';
import { Book } from './Book';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


export default {
	title: 'Book Item',
};

const initial = {
	track: null,
}

const store = createStore((state = initial, action) => {
	return state;
})

export const testStud = () => (
	<Provider store={store}>
		<Book
			// activeTrack={this.props.activeTrack}
			// onSelect={this.onTrackSelect}
			book={{
				book_id: 111,
				TracksListTitle: "Hello test",
				TracksList: [
					{
						RecordFileName: "file-1.mp3",
						RecordTitle: "Test title 1",
					},
					{
						RecordFileName: "file-2.mp3",
						RecordTitle: "Test title 2",
					},
				]
			}}
		/>
	</Provider>
);
