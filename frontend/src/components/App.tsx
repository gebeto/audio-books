import * as React from 'react';
import { connect } from 'react-redux';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';


import { Books, BooksList } from './Books/';
import { TrackList } from './TrackList/';
import { TrackInfo } from './TrackInfo';
import { Player } from './Player';

// export const App = (props) => {
// 	return (
// 		<div className="wrapper">
// 			<div className="content">
// 				<Books books={props.books} />
// 				<TrackList book={props.book} />
// 			</div>
// 			<div className="footer">
// 				<div className="footer-info">
// 					<TrackInfo book={props.book} track={props.track} />
// 				</div>
// 				<Player book={props.book} track={props.track} />
// 			</div>
// 		</div>
// 	);
// }


const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
		},
		offset: theme.mixins.toolbar,
	}),
);

export const App = (props) => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<AppBar position="fixed">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						Audio Books
					</Typography>
					<IconButton color="inherit">
						<SearchIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<div className={classes.offset}/>
			<BooksList books={props.books} />
			<TrackList book={props.book} />
			<Player book={props.book} track={props.track} />
		</React.Fragment>
		/*
			<div className="wrapper">
				<div className="content">
					<Books books={props.books} />
					<TrackList book={props.book} />
				</div>
				<div className="footer">
					<div className="footer-info">
						<TrackInfo book={props.book} track={props.track} />
					</div>
					<Player book={props.book} track={props.track} />
				</div>
			</div>
		*/
	);
}


export default connect(
	(state: any) => ({
		books: state.books,
		book: state.book,
		track: state.track,
	}),
	(dispatch) => ({}),
)(App);