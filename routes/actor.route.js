import express from "express";
import actorModel from "../models/actor.model.js";
import validate from "../middlewares/validate.mdw.js"
import actorSchemas from "../schemas/actor.schemas.js"
import { routeLogger } from '../middlewares/logger.mdw.js'
import {isAuthenticated} from "../middlewares/authentication.mdw.js";
const router = express.Router()

router.use(routeLogger);

router.get('/', isAuthenticated, async function (req, res) {
    try {
        const list = await actorModel.findAll();
        res.status(200).json(list);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Internal Server Error'
        })
    }
})
router.get('/:id', isAuthenticated, async function (req, res) {
    const id = req.params.id || 0;
    try {
        const actor = await actorModel.findById(id);
        if (actor === null) {
            return res.status(400).json({
                msg: 'actor not found'
            });
        }
        res.status(202).json(actor);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Internal Server Error'
        })
    }

})

router.post('/', isAuthenticated ,validate(actorSchemas.actor_schema), async function (req, res) {
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
        console.log(error);
        res.status(500).json({
            msg: 'Internal Server Error'
        })
    }

})

router.delete('/:id', isAuthenticated, async function (req, res) {
    const id = req.params.id || 0;
    try {
        const n = await actorModel.del(id);
        if(n<=0){
            return res.status(400).json({
                msg:"ID not found"
            })
            
            
        }
        
        return res.status(200).json({
            msg: 'delete success',
            affected: n
        });
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Internal Server Error'
        })
    }

})


router.patch('/:id', isAuthenticated, validate(actorSchemas.actor_update_schema), async function (req, res) {
    const id = req.params.id || 0;
    const film = req.body;
    try {
        const n = await actorModel.patch(id, film);
         if(n<=0){
            return res.status(400).json({
                msg:"ID not found"
            })
            
            
        }
        
        return res.status(200).json({
            msg: 'update success',
            affected: n
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Internal Server Error'
        })
    }

})
export default router;