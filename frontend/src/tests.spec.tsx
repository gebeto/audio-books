import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { shallow } from 'enzyme';
import { TrackInfo } from './components/TrackInfo';


describe("TrackInfo component", () => {
	const track = { title: "Test track" };
	const book = { book_id: 1 };

	const element = shallow(
		<TrackInfo
			track={track}
			book={book}
		/>
	);

	it("Title", () => {
		expect(element.find(".track-info-title").text()).toEqual(track.title);
	});
});