import fastifyCors from '@fastify/cors'
import fastify from 'fastify'
import {
  type ZodTypeProvider,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { createCompletionRoute } from '../routes/create-completion'
import { createGoalRoute } from '../routes/create-goal'
import { deleteCompletionRoute } from '../routes/delete-completion'
import { getPendingGoalsRoute } from '../routes/get-pending-goals'
import { getWeekSummaryRoute } from '../routes/get-week-summary'

const PORT = 3333
const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: '*',
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createGoalRoute)
app.register(createCompletionRoute)
app.register(deleteCompletionRoute)
app.register(getPendingGoalsRoute)
app.register(getWeekSummaryRoute)

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`HTTP server running in ${PORT} port`)
  })
