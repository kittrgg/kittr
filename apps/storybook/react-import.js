/**
 * We want tsup to define react automatically for us when it builds tsx files
 * that don't specifically import React. This file is injected as part of the tsup command
 * in the build process.
 */

// react-import.js
import React from "react"

export { React }
