/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli'

// Inseriamo i valori reali perché lo Studio ospitato li trovi sempre
const projectId = 'rq3pakl5' // <--- USA LA L MINUSCOLA QUI
const dataset = 'production'

export default defineCliConfig({ 
  api: { 
    projectId, 
    dataset 
  } 
})