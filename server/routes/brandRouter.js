const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole(["ADMIN", "MODERATOR"]), brandController.create)
router.get('/', brandController.getAll)
router.delete('/:id', checkRole(["ADMIN", "MODERATOR"]), brandController.deleteOne)

module.exports = router