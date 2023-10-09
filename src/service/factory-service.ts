import { FactoryModel } from '../models/model-factory.js'
import { Factory } from '../models/model-factory.js'

class FactoryService {
  async getAll() {
    const factories = await FactoryModel.find()
    return factories
  }
  async getOne(id: string) {
    if (!id) {
      throw new Error('id не указан')
    }
    const factoryId = await FactoryModel.findById(id)
    return factoryId
  }
  async create(post: Factory) {
    const createFactory = await FactoryModel.create(post)
    return createFactory
  }
  async update(id: string, post: Factory) {
    if (!id) {
      throw new Error('id не указан')
    }
    const updatedFactory = await FactoryModel.findByIdAndUpdate(id, post, { new: true })
    if (!updatedFactory) {
      throw new Error(`Завод с ID ${id} не найден`)
    }
    return updatedFactory
  }
  async delete(post:Factory) {
    if (!post) {
      throw new Error('id не указан')
    }
    const deleteFactory = await FactoryModel.deleteMany(post)
    return deleteFactory
  }
}

export default new FactoryService()
