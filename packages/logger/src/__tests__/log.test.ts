// TODO: Write tests for logger

import { log } from "../node/index"

jest.spyOn(global.console, "log")

describe("logger", () => {
	it("prints a message", () => {
		log("hello")
		expect(console.log).toBeCalled()
	})
})

// });
// describe("logger", () => {
//   it("prints a message", () => {
//     log("hello");
//     expect(console.log).toBeCalled();
//   });
// });
