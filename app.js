/* global log */
const path = require('path');
const newmanHandler = require(path.resolve(__dirname, 'src', 'newmanHandler.js'));

/**
 * Executes the newman Handler's executeAllOfferings method.
 * Entry point for command 'npm run runNewman'
 * @name runNewman
 * 
 */

module.exports.runNewman = function () {
    try {
        newmanHandler.executeAllOfferings();
    } catch (error) {
        const errMsg = `Error from app.js:runNewman: ${error}`;
        console.error(errMsg);
    }
};
