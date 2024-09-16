import { eq } from 'drizzle-orm'
import { db } from '../db'
import { goalCompletions } from '../db/schema'

interface DeleteGoalCompletionRequest {
  goalId: string
}

export async function deleteGoalCompletion({
  goalId,
}: DeleteGoalCompletionRequest) {
  const result = await db
    .delete(goalCompletions)
    .where(eq(goalCompletions.id, goalId))
    .returning({ deletedId: goalCompletions.goalId })

  return {
    result,
  }
}
