import { Request, Response } from 'express'
import factoryService from '../service/factory-service.js'

export class FactoryRouts {
  async getAll(req: Request, res: Response) {
    try {
      const factories = await factoryService.getAll()
      res.status(200).json(factories)
    } catch (error) {
      res.status(500).json({ 'Get all factory': error })
      console.log('Ошибка получения всех заводов', error)
    }
  }
  async getOne(req: Request, res: Response) {
    try {
      const factoryId = await factoryService.getOne(req.params.id)
      res.status(200).json(factoryId)
    } catch (error) {
      res.status(500).json({ 'Create factory': error })
      console.log('Ошибка получение завода', error)
    }
  }
  async create(req: Request, res: Response) {
    try {
      const createFactory = await factoryService.create(req.body)
      res.status(200).json(createFactory)
      res.status(200).json('Create factory')
    } catch (error) {
      res.status(500).json({ 'Create factory': error })
      console.log('Ошибка добавления завода', error)
    }
  }
  async update(req: Request, res: Response) {
    try {
      const post = req.body
      const updatedFactory = await factoryService.update(post._id, post)
      res.status(200).json(updatedFactory)
    } catch (error) {
      res.status(500).json({ 'Create factory': error })
      console.log('Ошибка обновления завода', error)
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id
      const deleteFactory = await factoryService.delete(id)
      res.status(200).json(deleteFactory)
    } catch (error) {
      res.status(500).json({ 'Create factory': error })
      console.log('Ошибка удаления завода', error)
    }
  }
}

export default new FactoryRouts()
