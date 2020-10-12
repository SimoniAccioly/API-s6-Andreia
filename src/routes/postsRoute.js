const express = require('express')
const router = express.Router()
const postsController = require('../../controllers/postsController')

//@route GET posts/
//@desc Retornar todos os artigos
router.get('/posts', postsController.obterPost)  

//@routes Metodo POST 
//@desc Create Post
//@access Public
//@endpoints http://localhost:port/posts
router.post('/posts', postsController.createPost)

//@route DELETE POST 
//@desc Deleta um post
//@endpoint http://localhost:porta/posts/:id

router.delete('/posts/:id', postsController.deletePost)

module.expots = router 