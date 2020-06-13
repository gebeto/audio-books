import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

import { TrackListItem } from './Track';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		appBar: {
			position: 'relative',
		},
		title: {
			marginLeft: theme.spacing(2),
			flex: 1,
			textOverflow: 'ellipsis',
			overflow: 'hidden',
			whiteSpace: 'nowrap',
		},
	}),
);

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & { children?: React.ReactElement },
	ref: React.Ref<unknown>,
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export const TrackListModal = (props) => {
	const classes = useStyles();

	const { track, book } = props;

	const onTrackSelect = React.useCallback((track: any) => {
		props.setTrack(props.book, track);
	}, [props.book]);

	return (
		<Dialog fullScreen open={!!props.book} onClose={props.handleClose} TransitionComponent={Transition}>
			<AppBar className={classes.appBar} position="fixed">
				<Toolbar>
					<IconButton edge="start" color="inherit" onClick={props.handleClose} aria-label="close">
						<CloseIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						{props.book && props.book.TracksListTitle}
					</Typography>
					{/*<Button color="inherit" onClick={props.handleClose}>
											save
										</Button>*/}
				</Toolbar>
			</AppBar>
			<List>
				{props.book && props.book.TracksList.map(track =>
					<TrackListItem
						key={track.RecordFileName}
						track={track}
						book={book}
						isActive={track === props.activeTrack}
						onSelect={onTrackSelect}
					/>
				)}
			</List>
		</Dialog>
	);
}
