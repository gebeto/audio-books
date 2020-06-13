import * as React from 'react';
import { connect } from 'react-redux';

import { trackLink } from '../api';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		hidden: {
			display: 'none',
		},
	}),
);


export const Player = (props) => {
	const classes = useStyles();
	if (!props.track) {
		return <audio className={classes.hidden} controls></audio>;
	}
	return (
		<audio className={classes.hidden} src={trackLink(props.book.book_id, props.track.RecordFileName)} autoPlay controls></audio>
	)
}
