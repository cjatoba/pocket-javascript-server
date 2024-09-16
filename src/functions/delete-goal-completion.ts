import { eq } from 'drizzle-orm'
import { db } from '../db'
import { goalCompletions } from '../db/schema'

interface DeleteGoalCompletionRequest {
  goalCompletionsId: string
}

export async function deleteGoalCompletion({
  goalCompletionsId,
}: DeleteGoalCompletionRequest) {
  const result = await db
    .delete(goalCompletions)
    .where(eq(goalCompletions.id, goalCompletionsId))
    .returning({ deletedId: goalCompletions.goalId })

  return {
    result,
  }
}
