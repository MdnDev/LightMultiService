import express from "express";
const router = express.Router()

router.get('/', (req, res) => {
    res.json(categories)
})

router.get('/:id', (req, res) => {
    const category = categories.find((c) => c._id === req.params.id)
    res.json(category)
})

export default router