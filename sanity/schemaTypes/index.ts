import { type SchemaTypeDefinition } from 'sanity'

// Aggiungi ../ per uscire dalla cartella schemaTypes
import { project } from './project' 

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project], 
}