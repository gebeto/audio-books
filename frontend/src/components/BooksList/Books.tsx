import * as React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import Grid from '@material-ui/core/Grid';


export class BooksListItem extends React.Component<any, any> {
	onClick = () => {
		this.props.onBookSelect(this.props.book);
	}

	render() {
		const { book } = this.props;
		return (
			<ListItem button onClick={this.onClick}>
				<ListItemAvatar>
					<Avatar
						variant="square"
						src={`https://storage.loudbook.ru/storages8/${book.book_id}/cover.jpg`}
					/>
				</ListItemAvatar>
				<ListItemText primary={book.title} secondary={`${book.author}, ${book.length}`} />
			</ListItem>
		);
	}
}


export class BooksList extends React.Component<any, any> {
	componentDidMount() {
		this.props.fetchBooks();
	}

	onBookSelect = (book) => {
		this.props.selectBook && this.props.selectBook(book.book_id);
	}

	render() {
		const { books } = this.props;
		return (
			<List>
				{books.map((book: any) =>
			 		<BooksListItem
			 			key={book.book_id}
			 			book={book}
			 			onBookSelect={this.onBookSelect}
			 		/>
				)}
			</List>
		);
	}
}
