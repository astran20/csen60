import { serve } from '@hono/node-server' 
import { Hono } from 'hono' 
import { serveStatic } from '@hono/node-server/serve-static' 


const app = new Hono()

app.use("/*",serveStatic({
  root: "./static",
}))

app.get('/api/todos', (c) => {
  //database call to fetch todos
  return c.json(todos)
})

const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})

//our database
const todos = [{
  id: 1,
  description: "Turn in homework",
  isComplete: false
},
{
  id:2,
  description: "Study for test",
  isComplete: false
}]



