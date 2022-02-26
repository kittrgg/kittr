// TODO: Write tests for logger

import { consoleLog } from "../node/index"

jest.spyOn(global.console, "log")

describe("logger", () => {
	it("prints a message", () => {
		consoleLog("hello")
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
