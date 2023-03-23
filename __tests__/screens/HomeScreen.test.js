import renderer from "react-test-renderer";

import HomeScreen from '../../screens/HomeScreen';

describe("<HomeScreen />", () => {
    it("has 2 child", async () => {
        const tree = renderer.create(<HomeScreen />).toJSON();
        expect(tree.children.length).toBe(2); // 2 Button Components
    });

    it("renders correctly", async () => {
        const tree = renderer.create(<HomeScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});