const express = require('express');
const Idea = require('../models/Idea');

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        const data = await Idea.create(request.body);
        response.send(data);
    } catch(err) {
        return response.status(400).send({"error": err});
    }
    
});

router.get('/', async (request, response) => {
    try {
        const data = await Idea.find({}).sort({createdAt: -1});
        response.send(data);

    } catch(err) {
        return response.status(400).send({"error": err});
    }
});

router.get('/:id', async (request, response) => {
    try {
        const data = await Idea.findById(request.params.id);
        response.send(data);

    } catch(err) {
        return response.status(400).send({"error": err});
    }
});

router.put('/:id', async (request, response) => {
    try {
        const data = await Idea.findByIdAndUpdate(request.params.id, request.body, { new: true });
        response.send(data);
    } catch(err) {
        return response.status(400).send({"error": err});
    }
});

router.delete('/:id', async (request, response) => {
    try {
        await Idea.findByIdAndRemove(request.params.id);
        response.send();

    } catch(err) {
        return response.status(400).send({"error": err});
    }
});


module.exports = app => app.use('/idea', router);
