import * as React from 'react';
import { Books } from './Books';

export default {
	title: 'Books',
};


export const booksList = () => (
	<Books
		fetchBooks={() => {}}
		selectBook={() => {}}
		books={[
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
		]}
	/>
);
