import * as React from 'react';


export class BookItem extends React.Component<any, any> {
	onClick = () => {
		this.props.onBookSelect(this.props.book);
	}

	render() {
		const { book } = this.props;
		return (
			<li className="books-item" onClick={this.onClick}>
				<span className="books-item-image">
					<img src={`https://storage.loudbook.ru/storages8/${book.book_id}/cover.jpg`} alt=""/>
				</span>
				<span className="books-item-title">
					<span className="books-item-title-text">
						{book.title}
					</span>
					<span className="books-item-title-description">
						<span>{book.author}</span>
						<span>{book.length}</span>
					</span>
				</span>
			</li>
		);
	}
}

export class Books extends React.Component<any, any> {
	componentDidMount() {
		console.log('asdasda');
		this.props.fetchBooks();
	}

	onBookSelect = (book) => {
		this.props.selectBook(book.book_id);
	}

	render() {
		const { books } = this.props;
		console.log('ASDASA');
		return (
			<div className="books">
				<ul>
					{books.map((book: any) =>
						<BookItem onBookSelect={this.onBookSelect} book={book} key={book.book_id} />
					)}
				</ul>
			</div>
		);
	}
}
