import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
    res.json(users)
})

router.get('/:id', (req, res) => {
    const user = users.find((u) => u._id === req.params.id)
    res.json(user)
})

export default router