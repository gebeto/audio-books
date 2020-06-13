import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { render, fireEvent, cleanup } from '@testing-library/react';
import { BooksList } from './Books';

// afterEach(cleanup);

const books = [
	{
		author: "Пол Стоун",
		book_id: "9804",
		in_app_key: "9804_003_lb00",
		length: "4 ч. 48 мин.",
		narrator: "Денис Маркин, Дарья Дурнева",
		price: "299 руб.",
		pub: "AB Publishing",
		related: "9804",
		title: "Английский язык. Аудиосериал-самоучитель English Tree",
	},
	{
		author: "Коллектив авторов",
		book_id: "5370",
		in_app_key: "5370_011_lb00",
		length: "4 ч. 4 мин.",
		price: "999 руб.",
		pub: "Дельта Паблишинг",
		related: "5370",
		title: "100 % АУДИО АНГЛИЙСКИЙ",
	}
];



test("Books List rendering", () => {
	const fetchBooks = jest.fn(a => null);
	const selectBook = jest.fn(a => null);
	const el = render(
		<BooksList
			fetchBooks={fetchBooks}
			selectBook={selectBook}
			books={books}
		/>
	);
});


test("First element of list is rendered", () => {
	const fetchBooks = jest.fn(a => null);
	const selectBook = jest.fn(a => null);
	const el = render(
		<BooksList
			fetchBooks={fetchBooks}
			selectBook={selectBook}
			books={books}
		/>
	);

	expect(el.getByText(books[1].title)).toHaveTextContent(books[1].title);
});


test("Book item is clicable", () => {
	const fetchBooks = jest.fn(a => null);
	const selectBook = jest.fn(a => null);
	const el = render(
		<BooksList
			fetchBooks={fetchBooks}
			selectBook={selectBook}
			books={books}
		/>
	);
	fireEvent.click(el.getByText(books[1].title));
	fireEvent.click(el.getByText(books[1].title));
	fireEvent.click(el.getByText(books[1].title));
	expect(selectBook.mock.calls.length).toBe(3);
});


// test("fetchBooks are called after BooksList component is rendered", () => {
// 	expect(fetchBooks.mock.calls.length).toBe(1);
// });