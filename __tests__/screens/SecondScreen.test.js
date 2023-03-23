import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";

import SecondScreen from '../../screens/SecondScreen';

describe("<SecondScreen />", () => {
	// Note:: Initiate default params for unit test
	const mockedParams = {
		route: { params: { language: 'english', name: "John Doe" } },
		navigation: ''
	};

	it("has 3 child", async () => {
<<<<<<< Updated upstream:__tests__/screens/SecondScreen.test.js
		const tree = renderer.create(<SecondScreen {...mockedParams} />).toJSON();
		expect(tree.children.length).toBe(3); // 2 Button and 1 Text Components
=======
		const tree = renderer.create(<ProfileScreen {...mockedParams} />).toJSON();
		expect(tree.children.length).toBe(2); // 2 Button and 1 Text Components
>>>>>>> Stashed changes:__tests__/screens/ProfileScreen.test.js
	});

	it("renders correctly", async () => {
		const tree = renderer.create(<SecondScreen {...mockedParams} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("renders Hello message on the home page", async () => {
<<<<<<< Updated upstream:__tests__/screens/SecondScreen.test.js
		const screen = render(<SecondScreen {...mockedParams} />);
		expect(screen.getByText("Hello")).toBeDefined()
=======
		const screen = render(<ProfileScreen {...mockedParams} />);
		expect(screen.getByText("Hello, John Doe")).toBeDefined()
>>>>>>> Stashed changes:__tests__/screens/ProfileScreen.test.js
	});
});