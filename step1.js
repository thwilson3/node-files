"use strict";

const fsP = require("fs/promises");

async function cat(path) {
  try {
    let contents = await fsP.readFile(path, "utf-8");
    console.log(contents);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};


function readAllFiles() {
  const files = process.argv;

  for(const file of files){
    cat(file);
  }
};

readAllFiles();
