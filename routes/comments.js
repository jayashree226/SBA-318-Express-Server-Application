const express = require("express")
const router = express.Router()
const posts = require("../data/comments")
const comments = require("../data/comments")
router
    .route("/")
    .get((req, res)=> {
    res.json(comments)
})

// Routes for comments
app.get('/comments', (req, res) => {
    res.json(comments);
  });
  
  app.post('/comments', (req, res) => {
    const newComment = {
      id: comments.length + 1,
      postId: req.body.postId,
      content: req.body.content
    };
    comments.push(newComment);
    res.status(201).json(newComment);
  });

  //Get route
  router.get("/alt", async (req, res) => {
    const collection = await db.collection("comments");
   const users = await collection.find({}).toArray();
   res.status(200).json(comments);//(convert to json)
  });

  //Delete posts========================================
  
  router.delete("/:id", async (req, res) => {
    let collection = await db.collection("comments");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.deleteOne(query);
  
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
  });