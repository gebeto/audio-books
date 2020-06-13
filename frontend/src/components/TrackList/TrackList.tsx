import * as React from 'react';
import JSONTree from 'react-json-tree';

import { trackLink } from '../../api';
import Track from './Track';

import './index.scss';


export class TrackList extends React.Component<any, any> {
	onTrackSelect = (track: any) => {
		this.props.setTrack(this.props.book, track);
	}

	render() {
		const { book } = this.props;

		if (!book) {
			return (
				<div className="book">
					<h3>Tracks</h3>
					<ul></ul>
				</div>
			);
		}

		return (
			<div className="book">
				<h3>{book.TracksListTitle || 'Tracks'}</h3>
				<ul>
					{book.TracksList.map(track =>
						<Track key={track.RecordFileName} track={track} book={book} activeTrack={this.props.activeTrack} onSelect={this.onTrackSelect} />
					)}
				</ul>
			</div>
		);
	}
}


export default TrackList;