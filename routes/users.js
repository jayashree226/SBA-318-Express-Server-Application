const express = require("express")
const router = express.Router()
const users = require("../data/users")
router
    .route("/")
    .get((req, res) =>{
    res.json(users)
})
.post((req, res) =>{
    if (req.body.name && req.body.email){
        if (users.find((u) => u.name == req.body.name)){
            res.json({error: "Name Already Taken"})
            return
        }
        const user = {
            id: users[users.length - 1].id + 1,
            name: req.body.name,
            email: req.body.email
        }
        users.push(user)
        res.json(users[users.length -1])
    } else res.json({error: "Insufficient Data"})
})
router
.route("/")
    .get((req, res, next) =>{
    const user = users.find((u) => u.id == req.params.id)
    if (user) res.json(user)
    else next()
})

.patch((req, res, next)=>{
    const user = users.find((u, i) =>{
        if (u.id == req.params.id){
            for (const key in req.body) {
                users[i][key] = req.body[key]
            }
            return true
        }
    })
    if (user) res.json(user)
    else next()
})
.delete((req, res, next) =>{
    const user = users.find((u, i) =>{
        if (u.id == req.params.id){
            users.splice(i, 1)
            return true
        }
    })
    if (user) res.json(user)
    else next()
})
module.exports = router