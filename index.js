const fs = require("fs");

const fileName = "teks.txt";

fs.readFile(fileName, "utf8", (err, data) => {
  if (err) {
    console.error("Kesalahan:", err);
    return;
  }
  console.log("Isi file teks:\n", data);
});
