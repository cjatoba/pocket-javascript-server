import { lte } from 'drizzle-orm'
import { db } from '../db'
import { goals } from '../db/schema'
import { lastDayOfWeek } from '../utils/date'

export const goalsCreatedUpToWeek = db.$with('goals_created_up_to_week').as(
  db
    .select({
      id: goals.id,
      title: goals.title,
      desiredWeeklyFrequency: goals.desiredWeeklyFrequency,
      createdAt: goals.createdAt,
    })
    .from(goals)
    .where(lte(goals.createdAt, lastDayOfWeek))
)
