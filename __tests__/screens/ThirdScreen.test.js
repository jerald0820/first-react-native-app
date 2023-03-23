import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";

import ThirdScreen from '../../screens/ThirdScreen';

describe("<ThirdScreen />", () => {
	it("has 3 child", async () => {
		const tree = renderer.create(<ThirdScreen />).toJSON();
		expect(tree.children.length).toBe(3); // 2 Button and 1 Text Components
	});

	it("renders correctly", async () => {
		const tree = renderer.create(<ThirdScreen />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("renders Third Screen message on the home page", async () => {
		const screen = render(<ThirdScreen />);
		expect(screen.getByText("Third Screen")).toBeDefined()
	});
});