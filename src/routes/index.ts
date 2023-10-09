import express from 'express'
import factoryController from '../controllers/factory-controller.js'
const router = express.Router()

router.get('/',  factoryController.getAll)
router.get('/:id',factoryController.getOne)
router.post('/',factoryController.create)
router.put('/:id',factoryController.update)
router.delete('/',factoryController.delete)

export default router
