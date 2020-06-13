import * as React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames/bind';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import PlayIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';

import { trackLink } from '../../api';


const cx = cn.bind({
	base: 'book-track',
	isActive: 'book-track-active',
});


export class Track extends React.Component<any, any> {
	onClick = () => {
		this.props.onSelect && this.props.onSelect(this.props.track);
	}

	render() {
		const { track, book, isActive } = this.props;

		return (
			<li className={cx('base', {isActive})} key={track.RecordFileName} onClick={this.onClick}>
				<div className="book-track-image">
					<img src="https://via.placeholder.com/150" alt=""/>
				</div>
				<span className="book-track-title">
					{track.RecordTitle}
				</span>
				<span className="book-track-buttons">
					<button>{isActive ? '■' : '►'}</button>
					<button>
						<a href={trackLink(book.book_id, track.RecordFileName)} target="_blank">⇩</a>
					</button>
				</span>
			</li>
		);
	}
}

export class TrackListItem extends React.Component<any, any> {
	onClick = () => {
		this.props.onSelect && this.props.onSelect(this.props.track);
	}

	render() {
		const { track, book, isActive } = this.props;

		return (
			<ListItem button onClick={this.onClick} selected={isActive}>
				<ListItemText primary={track.RecordTitle} secondary={track.RecordFileName} />
				<ListItemSecondaryAction>
					<IconButton edge="end" aria-label="play">
						{isActive ? <StopIcon /> : <PlayIcon />}
					</IconButton>
					<IconButton
						edge="end"
						aria-label="download"
						href={trackLink(book.book_id, track.RecordFileName)}
						target="_blank"
					>
						<DownloadIcon />
					</IconButton>
				</ListItemSecondaryAction>
			</ListItem>

		);
	}
}
