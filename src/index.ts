import { AppDataSource } from "./data-source"
import * as express from "express"
import ArticleRouter from './app/articles/router'
import PartyRouter from './app/parties/router'
import CandidateRouter from './app/candidates/router'
import VoterRouter from './app/voters/router'
import UserAuthRouter from './app/usersAuth/router'

AppDataSource.initialize().then(async () => {
    const app = express()
    
    app.use(express.json())

    // router
    app.use('/api/v1', ArticleRouter)
    app.use('/api/v1', PartyRouter)
    app.use('/api/v1', CandidateRouter)
    app.use('/api/v1', VoterRouter)
    app.use('/api/v1', UserAuthRouter)

     // port
     const Port = 4000
     app.listen(Port, ()=>{
         console.log(`Server is running in port ${4000}`)
     })

}).catch(error => console.log(error))
