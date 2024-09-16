import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { deleteGoalCompletion } from '../functions/delete-goal-completion'

export const deleteCompletionRoute: FastifyPluginAsyncZod = async app => {
  app.delete(
    '/completions',
    {
      schema: {
        body: z.object({
          goalCompletionsId: z.string(),
        }),
      },
    },
    async request => {
      const { goalCompletionsId } = request.body

      return await deleteGoalCompletion({
        goalCompletionsId,
      })
    }
  )
}
