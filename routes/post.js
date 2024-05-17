const express = require("express")
const router = express.Router()
const posts = require("../data/posts")
router
    .route("/")
    .get((req, res)=> {
    res.json(posts)
})
app.get('/posts', (req, res) => {
    res.json(posts);
  });
  
  // Routes for posts ============================
  app.post('/posts', (req, res) => {
    const newPost = {
      id: posts.length + 1,
      title: req.body.title,
      content: req.body.content
    };
    posts.push(newPost);
    res.status(201).json(newPost);
  });


  //Get route===========================================
  router.get("/alt", async (req, res) => {
    const collection = await db.collection("posts");
   const users = await collection.find({}).toArray();
   res.status(200).json(posts);//(convert to json)
  });

  // Delete post

  router.delete("/:id", async (req, res) => {
    let collection = await db.collection("posts");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.deleteOne(query);
  
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
  });