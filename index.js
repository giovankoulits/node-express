/* const fsPromises = require('node:fs').promises;
const path = require('node:path');
const filePath = path.join(__dirname, 'files', 'starter.txt');

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(filePath, 'utf8');
    console.log(data);
    await fsPromises.unlink(filePath, 'utf8');
    await fsPromises.writeFile(
      path.join(__dirname, 'files', 'promiseWrite.txt'),
      'henlo from promiseWrite \n'
    );
    await fsPromises.appendFile(
      path.join(__dirname, 'files', 'promiseWrite.txt'),
      'henlo from promiseAppend \n'
    );
    await fsPromises.rename(
      path.join(__dirname, 'files', 'promiseWrite.txt'),
      path.join(__dirname, 'files', 'promiseRename.txt')
    );
    const newData = await fsPromises.readFile(
      path.join(__dirname, 'files', 'promiseRename.txt'),
      'utf8'
    );
    console.log(newData);
  } catch (error) {
    console.error(error);
  }
};

fileOps();


 */

const fs = require('node:fs');
const path = require('node:path');

if (!fs.existsSync('./new')) {
  fs.mkdirSync('./new', (err) => {
    if (err) {
      throw err;
    } else console.log('directory created');
  });
  fs.writeFile(path.join(__dirname, 'new', 'test.txt'), 'henlo fren', (err) => {
    if (err) {
      throw err;
    } else console.log('directory created');
  });
}

/* fs.writeFile(path.join(__dirname, 'new', 'test.txt'), 'hi', (err) => {
  if (err) {
    console.error(err);
  }
}); */
