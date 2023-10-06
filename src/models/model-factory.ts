import { Schema, model } from 'mongoose'

// 1. Create an interface representing a document in MongoDB.
export interface Factory {
  index: string
  name: string
  host: string
}

const factorySchemas = new Schema<Factory>({
  index: { type: String, required: true },
  name: { type: String, required: true },
  host: { type: String, required: true },
})

export const FactoryModel = model<Factory>('Factory', factorySchemas)
