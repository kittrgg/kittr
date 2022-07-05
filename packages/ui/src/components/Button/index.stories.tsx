import { Button } from "."

export default {
	title: "Button",
	component: Button
}

export const Default = () => <Button variant="default" onClick={() => console.log("just a test")}>Testy boi</Button>
export const Filled = () => <Button variant="filled"onClick={() => console.log("just a test")}>Testy boi</Button>
export const Gradient = () => <Button variant="gradient"onClick={() => console.log("just a test")}>Testy boi</Button>
export const Light = () => <Button variant="light"onClick={() => console.log("just a test")}>Testy boi</Button>
export const Outline = () => <Button variant="outline"onClick={() => console.log("just a test")}>Testy boi</Button>
