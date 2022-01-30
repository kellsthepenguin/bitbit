import { PrismaClient } from '@prisma/client'
import { readFileSync } from 'fs'

const prisma = new PrismaClient()
const key = readFileSync('./private.key').toString('utf-8')

export { prisma, key }
