import express from "express";
import actorModel from "../models/actor.model.js";
const router = express.Router()

router.get('/', async function (req, res) {
    try {
        const list = await actorModel.findAll();
        res.json(list);
    } catch (error) {
        res.status(400).json({
            msg: 'bad request'
        })
    }
})

router.get('/:id', async function (req, res) {
    const id = req.params.id || 0;
    try {
        const actor = await actorModel.findById(id);
        if (actor === null) {
            return res.status(404).json({
                msg: 'actor not found'
            });
        }
        res.json(actor);
    } catch (error) {
        res.status(400).json({
            msg: 'bad request'
        })
    }

})

router.post('/', async function (req, res) {
    let actor = req.body;
    try {
        const ret = await actorModel.add(actor);
        actor = {
            actor_id: ret[0],
            ...actor
        }
        res.status(201).json({
            actor: actor,
            msg: 'add success'
        });
    } catch (error) {
        res.status(400).json({
            msg: 'bad request'
        })
    }

})

router.delete('/:id', async function (req, res) {
    const id = req.params.id || 0;
    try {
        const n = await actorModel.del(id);
        res.json({
            msg: 'delete success',
            affected: n
        });
    } catch (error) {
        res.status(400).json({
            msg: 'bad request'
        })
    }

})

router.patch('/:id', async function (req, res) {
    const id = req.params.id || 0;
    const film = req.body;
    try {
        const n = await actorModel.patch(id, film);
        res.json({
            msg: 'update success',
            affected: n
        });
    } catch (error) {
        res.status(400).json({
            msg: 'bad request'
        })
    }

})

export default router;