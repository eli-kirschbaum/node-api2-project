// implement your server here
// require your posts router and connect it here

//step 1
const express = require('express');
//step 2
const postsRouter = require('./posts/posts-router');
//step 1
const server = express();
//step 1
server.use(express.json());

//step 2
//captures all requests made with /post
//funnels them through this router
//helps break up app into smaller components
server.use('/api/posts', postsRouter)


//step 1
server.use('*', (req, res) => {
    res.status(404).json({
        message: 'not found'
    })
});
//step 1
module.exports = server;