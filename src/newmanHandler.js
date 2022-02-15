const className = 'newmanExecutor';

const path = require('path');
const fs = require('fs');

const diaExecutor = require(path.resolve(__dirname, 'executors/diaExecutor.js'));

/**
 * Invokes the product executors js methods
 * @public
 * @function executeAllOfferings
 */
async function executeAllOfferings() {
    //console.log("how");
    try {
        //invoke executeDeleteDia to run newman for delete senarios
        const deleteDiaHtmlString = await diaExecutor.executeDeleteDia();
        //invoke executeCreateDia to run newman for create senarios
        const createDiaHtmlString = await diaExecutor.executeCreateDia();
        
        let htmlString = createDiaHtmlString + deleteDiaHtmlString;
        //create index.html page
        createIndexHtmlPage(htmlString);
    } catch (error) {
        const errMsg = `Error from ${className}:executeAllOfferings: ${error}`;
        console.error(errMsg);
    }
}

/**
 * Creates Index Html Page in report folder
 * @public
 * @function createIndexHtmlPage
 */
function createIndexHtmlPage(htmlString) {

    //console.log(htmlString);
    let htmlStart = '<html><body>'
        + '<div style="background-color:grey;color:white;border-radius:15px;text-align:center;text-shadow: 1px 1px 2px black, 0 0 10px white, 0 0 5px black;box-shadow:3px 3px black;">'
        + '<h1>LNAAS TestReport for wiremock-automation</h1></div>';
    let htmlEnd = '</body></html>'
    let fileName = './report/index.html';
    //creates a file
    let stream = fs.createWriteStream(fileName);
    //writeing to the file
    stream.once('open', function () {
        stream.end(htmlStart + htmlString + htmlEnd);
    });
}

module.exports = {
    executeAllOfferings
};