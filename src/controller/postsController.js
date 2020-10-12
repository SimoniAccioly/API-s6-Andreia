const postsModel = require('../model/posts-model')
//@desc Gera um ID único/universal
const  uuidv4 = require ('uuid/v4')

const obterPost = (request, response) => {
    response.status(200).json(postsModel)
}



const createPost = (req, res) => {
    const {date_created, title, content} = req.body;   

    const newPost = {
        id: helper.newId(postsModel),
        date_created: helper.newData(postsModel),
        title: title,
        content: content

    }
    postsModel.push(newPost)

    if (!id) {
        this.id = uuidv4
    }
    res.status(201).json(newPost)
}

const deletePost = (requisicao, resposta) => {
    const { id } = requisicao.params

    let listaPosts = postsModel.filter(post => {
        return post.id == id
        
    })[0]

    const index = postsModel.indexOf(listaPosts)
    
    postsModel.splice(index, 1)

    resposta.json(postsModel)
}

module.exports = {
    obterPost,
    createPost,
    deletePost
}