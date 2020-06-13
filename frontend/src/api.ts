// import plist from 'plist';

const resJson = res => res.json();
const fetchIt = <T = any>(url) => fetch(url).then(resJson) as Promise<T>;

export interface Category {
	cover_ipad: string;
	cover_iphone: string;
	data_file: string;
	flash: string;
	last_version: string;
	name: string;
}

export interface BookItem {
	author: string;
	book_id: string;
	in_app_key: string;
	length: string;
	narrator: string;
	price: string;
	pub: string;
	related: string;
	title: string;
}

export interface Track {
	RecordFileName: string;
	RecordTitle: string;
}

export interface Book {
	MainTitle: string;
	SiteUrl: string;
	TracksList: Track[];
	TracksListTitle: string;
}


export const base = typeof (window as any).HOST !== 'string' ? 'http://localhost:3000' : (window as any).HOST;

export const trackLink = (bookId, trackFile) => `${base}/books/${bookId}/${trackFile}`;
export const courseCoverLink = (bookId) => bookId ? `https://storage.loudbook.ru/storages8/${bookId}/cover.jpg` : 'https://via.placeholder.com/150';

export const getCategories = () => fetchIt<{ categories: Category[]; }>(`${base}/books`).then(res => res.categories);
export const getBooks = () => fetchIt<{ books: BookItem[]; }>(`${base}/books-learnenglish.json`).then(res => res.books);
export const getBook = (bookId: any) => fetchIt<{ book: Book; }>(`${base}/books/${bookId}`).then(res => res.book);