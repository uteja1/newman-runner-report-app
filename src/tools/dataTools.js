const path = require('path');
const fs = require('fs');

/**
 * Read JSON data from given file path
 * @public
 * @function executeDeleteDia
 * @returns {Object}
 */
function fetchJsonFromFile(path) {
    let rawdata = fs.readFileSync(path);
    let jsonData = JSON.parse(rawdata);
    return jsonData;
}

module.exports = {
    fetchJsonFromFile
};