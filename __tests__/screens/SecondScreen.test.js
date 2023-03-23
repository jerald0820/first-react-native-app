import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";

import SecondScreen from '../../screens/SecondScreen';

describe("<SecondScreen />", () => {
	// Note:: Initiate default params for unit test
	const mockedParams = {
		route: { params: { language: 'english' } },
		navigation: ''
	};

	it("has 3 child", async () => {
		const tree = renderer.create(<SecondScreen {...mockedParams} />).toJSON();
		expect(tree.children.length).toBe(3); // 2 Button and 1 Text Components
	});

	it("renders correctly", async () => {
		const tree = renderer.create(<SecondScreen {...mockedParams} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("renders Hello message on the home page", async () => {
		const screen = render(<SecondScreen {...mockedParams} />);
		expect(screen.getByText("Hello")).toBeDefined()
	});
});