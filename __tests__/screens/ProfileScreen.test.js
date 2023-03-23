import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";

import ProfileScreen from '../../screens/ProfileScreen';

describe("<ProfileScreen />", () => {
	// Note:: Initiate default params for unit test
	const mockedParams = {
		route: { params: { language: 'english', name: 'John Doe' } },
		navigation: ''
	};

	it("has 3 child", async () => {
		const tree = renderer.create(<ProfileScreen {...mockedParams} />).toJSON();
		expect(tree.children.length).toBe(2); // 1 Button and 1 Text Components
	});

	it("renders correctly", async () => {
		const tree = renderer.create(<ProfileScreen {...mockedParams} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("renders Hello message on the home page", async () => {
		const screen = render(<ProfileScreen {...mockedParams} />);
		expect(screen.getByText("Hello, John Doe")).toBeDefined()
	});
});