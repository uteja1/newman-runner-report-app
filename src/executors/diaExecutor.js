const path = require('path');
const newman = require('newman');
const className = 'diaExecutor';

const dataTools = require(path.resolve(__dirname, '../tools/dataTools.js'));
const collectionPathDia = require(path.resolve(__dirname, '../../postmanCollections/dia_collections.postman_collection.json'));

/**
 * Runs the newman for delete dia senarios
 * @public
 * @function executeDeleteDia
 * @returns {Promise}
 */
async function executeDeleteDia() {
    let deleteDiaHtmlString;
    //creating a object with senario names and adding its value as false
    let successOrFailureKeyValues = {
        "Delete_Dia_Senario": false
    };
    //delete dia collection runner payloads file path
    //const iterationDataPathDeleteDia = 'requestPayloadFiles/deleteDiaRequestPayloads.json';
    const iterationDataPathDeleteDia = '/home/ihome/wiremockAutomation/wiremock-standalone/payloads/serviceLayer/app-naas_dia/deleteDiaRequestPayloads.json';
    //export global collection json path generated from running newman which has details of senarios executed.
    //sample global collection in this folder ".\report\globalCollectionDeleteDia.json"
    const exportGlobalsPathDeleteDia = 'report/globalCollectionDeleteDia.json';
    //export html report path
    const htmlDeleteDiaReportPath = 'report/delete_dia_report.html';

    try {

        return new Promise(function (onResolve) {
            // newman collection runner
            newman.run({
                collection: collectionPathDia,
                iterationData: iterationDataPathDeleteDia,
                exportGlobals: exportGlobalsPathDeleteDia,
                reporters: ['htmlextra', 'cli'],
                reporter: {
                    htmlextra: {
                        export: htmlDeleteDiaReportPath,
                        logs: true
                    }
                }
            }).on('done', function (errorNewman) {
                //check for errors got while running newman
                if (errorNewman) {
                    errMsg = `Error from ${className}:executeDeleteDia : ${errorNewman}`;
                }
                //fetch global collection data for executed senario
                let deleteDiaJsonData = dataTools.fetchJsonFromFile(exportGlobalsPathDeleteDia);
                deleteDiaJsonData.values.forEach(value => {
                    //compares if senario present
                    if (value.key === "Delete_Dia_Senario") {
                        //checks if the senario has ran successfullly or not.
                        if (value.value === true) {
                            //setting Delete_Dia_Senario attribute to true if ran successfully
                            successOrFailureKeyValues.Delete_Dia_Senario = true;
                        }
                    }
                });

                //based on the Delete_Dia_Senario attribute value return the true or false html string
                if (successOrFailureKeyValues.Delete_Dia_Senario) {
                    deleteDiaHtmlString = '<br/>' + '<div style="text-align:center;background-color:lightgreen;border-radius:20px;box-shadow:3px 3px darkgreen;width:500px;height:25px;margin:auto">'
                        + '<a href="/index/delete_dia_report">delete dia senarios report</a>'
                        + '</div>';
                } else {
                    deleteDiaHtmlString = '<br/>' + '<div style="text-align:center;background-color:orange;border-radius:20px;box-shadow:3px 3px darkgreen;width:500px;height:25px;margin:auto">'
                        + '<a href="/index/delete_dia_report">delete dia senarios report</a>'
                        + '</div>';
                }
                onResolve(deleteDiaHtmlString);
            });

        });
    } catch (error) {
        errMsg = `Error from ${className}:executeCreateDia : ${error}`;
        throw new Error(errMsg);
    }
}

/**
 * Runs the newman for create dia senarios
 * @public
 * @function executeCreateDia
 * @returns {Promise}
 */
async function executeCreateDia() {
    let createDiaHtmlString;
    //creating a object with senario names and adding its value as false
    let successOrFailureKeyValues = {
        "Create_Dia_with_Oline_Create_Senario": false,
        "Create_Dia_with_Out_Oline_Create_Senario": false
    };
    //create dia collection runner payload file path
    //const iterationDataPathDeleteDia = 'requestPayloadFiles/createDiaRequestPayloads.json';
    const iterationDataPathCreateDia = '/home/ihome/wiremockAutomation/wiremock-standalone/payloads/serviceLayer/app-naas_dia/createDiaRequestPayloads.json';
    //export global collection json path generated from running newman which has details of senarios executed.
    //sample global collection in this folder ".\report\globalCollectionCreateDia.json"
    const exportGlobalsPathCreateDia = 'report/globalCollectionCreateDia.json';
    //export html report path
    const htmlCreateDiaReportPath = 'report/create_dia_report.html';
    try {

        return new Promise(function (onResolve) {
            // newman collection runner
            newman.run({
                collection: collectionPathDia,
                iterationData: iterationDataPathCreateDia,
                exportGlobals: exportGlobalsPathCreateDia,
                reporters: ['htmlextra', 'cli'],
                reporter: {
                    htmlextra: {
                        export: htmlCreateDiaReportPath,
                        logs: true
                    }
                }
            }).on('done', function (errorNewman) {
                //check for errors got while running newman
                if (errorNewman) {
                    errMsg = `Error from ${className}:executeCreateDia : ${errorNewman}`;
                }
                //fetch global collection data for executed senario
                let createDiaJsonData = dataTools.fetchJsonFromFile(exportGlobalsPathCreateDia);
                createDiaJsonData.values.forEach(value => {
                    //compares if senario present
                    if (value.key === "Create_Dia_with_Oline_Create_Senario") {
                        //checks if the senario has ran successfullly or not.
                        if (value.value === true) {
                            //setting Create_Dia_with_Oline_Create_Senario attribute to true if ran successfully
                            successOrFailureKeyValues.Create_Dia_with_Oline_Create_Senario = true;
                        }
                    } else if (value.key === "Create_Dia_with_Out_Oline_Create_Senario") {
                        if (value.value === true) {
                            successOrFailureKeyValues.Create_Dia_with_Out_Oline_Create_Senario = true;
                        }
                    }
                });
                 //based on the Create_Dia_with_Oline_Create_Senario attribute value return the true or false html string
                if (successOrFailureKeyValues.Create_Dia_with_Oline_Create_Senario && successOrFailureKeyValues.Create_Dia_with_Out_Oline_Create_Senario) {
                    createDiaHtmlString = '<br/>' + '<div style="text-align:center;background-color:lightgreen;border-radius:20px;box-shadow:3px 3px darkgreen;width:500px;height:25px;margin:auto">'
                        + '<a href="/index/create_dia_report">create dia with oline senarios report</a>'
                        + '</div>';
                } else {
                    createDiaHtmlString = '<br/>' + '<div style="text-align:center;background-color:orange;border-radius:20px;box-shadow:3px 3px darkgreen;width:500px;height:25px;margin:auto">'
                        + '<a href="/index/create_dia_report">create dia with oline senarios report</a>'
                        + '</div>';
                }
                onResolve(createDiaHtmlString);
            });

        });
    } catch (error) {
        errMsg = `Error from ${className}:executeCreateDia : ${error}`;
        throw new Error(errMsg);
    }
}

module.exports = {
    executeDeleteDia,
    executeCreateDia
};
