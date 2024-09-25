import { Router } from 'express'

import * as db from '../db/projects.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const projects = await db.getAllProjects()
    res.json(projects)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went terribly wrong' })
  }
})

export default router
