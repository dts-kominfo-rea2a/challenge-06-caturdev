// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {

  fs.readFile(file1, 'utf-8', (err, data) => {

    const dataFile1 = JSON.parse(data);
    if (!dataFile1.message.split(" ")[1]) return fnCallback("Data tidak sesuai", null);

    fs.readFile(file2, 'utf-8', (err, data) => {

      const dataFile2 = JSON.parse(data);
      if (!dataFile2[0].message.split(" ")[1]) return fnCallback("Data tidak sesuai", null);

      fs.readFile(file3, 'utf-8', (err, data) => {

        const dataFile3 = JSON.parse(data);
        if (!dataFile3[0].data.message.split(" ")[1]) return fnCallback("Data tidak sesuai", null);

        const result = [
          dataFile1.message.split(" ")[1],
          dataFile2[0].message.split(" ")[1],
          dataFile3[0].data.message.split(" ")[1],
        ]

        return fnCallback(null, result);

      }); // file 3

    }); // file 2

  }); // file 1

};
// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
