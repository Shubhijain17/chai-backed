import express from 'express'

let app = express()

app.get('/api/jokes',(req,res)=>{
    res.send(jokes)
})

app.listen(4000,()=>{
    console.log('server is running........')
})