import * as functions from 'firebase-functions';
import express from 'express';
import bodyParser from 'body-parser';

import router from '@controller/index';
import cors from 'cors';

const mainApp = express();

mainApp.use(bodyParser.json());
mainApp.use(bodyParser.urlencoded({ extended: true }));
mainApp.use(router.clientRouter);
mainApp.use(cors());

if(process.env.NODE_ENV == 'production'){
  exports.app = functions.https.onRequest(mainApp)
}else{
  mainApp.listen(
    3000,
    () => {
      console.log('Deogracias listening on port 3000!');
    }
  );
}

