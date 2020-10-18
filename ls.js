#!/usr/bin/env node

(async function() {
    let { promises: fs } = require("fs")
    let cwd = process.cwd()
    let dir = await fs.readdir(cwd)
    console.log(dir)
})()