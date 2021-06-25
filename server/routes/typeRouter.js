const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole(["ADMIN", "MODERATOR"]), typeController.create)
router.get('/', typeController.getAll)
router.delete('/:id', checkRole(["ADMIN", "MODERATOR"]), typeController.deleteOne)

module.exports = router