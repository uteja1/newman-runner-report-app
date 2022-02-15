### WireMock automation test suite app

    NodeJs App for executing postman test suites and generating reports.

### NPM Commands to be followed for testing in local system

    ## do npm install
    
    $ npm install

    1. Before executing the app in local system for testing. Change the iteration data path in the  executors js file ex:- diaExecutor.js 
    
        #change  const iterationDataPathDeleteDia = '/home/ihome/wiremockAutomation/wiremock-standalone/payloads/serviceLayer/app-naas_dia/deleteDiaRequestPayloads.json';
        
        to

        # const iterationDataPathDeleteDia = 'requestPayloadFiles/deleteDiaRequestPayloads.json'; 

        for testing in local system.

    2. run below command to execute the app.js 's runNewman method for executing newman.

        $ npm run runNewman

    3. run below command to start the server for viewing reports

        $ npm run forever start server.js

        # Hit this url to visit the index.html page and reports
        
        $ localhost:8080/index

    4. run below command to stop the server for viewing reports

        $ npm run forever stop server.js
