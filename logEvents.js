//npm
const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
//local modules
const fs = require('node:fs');
const fsPromises = require('node:fs').promises;
const path = require('path');

const logEvents = async (message) => {
  const dateTime = `${format(new Date(), 'yyyyMMdd \t HH:mm:ss')}`;
  const logItem = `${dateTime} \t ${uuid()} \t ${message} \n`;
  try {
    if (!fs.existsSync(path.join(__dirname, 'logs'))) {
      await fsPromises.mkdir(path.join(__dirname, 'logs'));
      await fsPromises.writeFile('event.text', logItem);
    }
    await fsPromises.appendFile(
      path.join(__dirname, 'logs', 'event.txt'),
      logItem
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = logEvents;
