import { Router } from 'express'

import * as db from '../db/projects.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const projects = await db.getAllProjects()
    res.status(200).json(projects)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went terribly wrong' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const project = await db.getProjectById(id)

    res.status(200).json(project)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went terribly wrong' })
  }
})

export default router
