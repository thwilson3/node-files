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
  console.log(process.argv);
  const files = process.argv;

  for(let i=2 ; i<files.length; i++){
    cat(files[i]);
  }
};

readAllFiles();
