import express from "express";
import filmModel from "../models/film.model.js";
import validate from "../middlewares/validate.mdw.js"
import filmSchemas from "../schemas/film.schemas.js";
import { routeLogger } from '../middlewares/logger.mdw.js'


const router = express.Router();



router.use(routeLogger);
router.get('/', async function (req, res) {
    try {
        const list = await filmModel.findAll();
        res.json(list);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Internal Server Error'
        })
    }
})

router.get('/:id', async function (req, res) {
    const id = req.params.id || 0;
    try {
        const actor = await filmModel.findById(id);
        if (actor === null) {
            return res.status(404).json({
                msg: 'film not found'
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

router.post('/', validate(filmSchemas.film_schema), async function (req, res) {
    let film = req.body;
    console.log(film)
    try {
        const ret = await filmModel.add(film);
        film = {
            film_id: ret[0],
            ...film
        }
        res.status(201).json({
            film: film,
            msg: 'add success'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Internal Server Error'
        })
    }
})

router.delete('/:id', async function (req, res) {
    const id = req.params.id || 0;
    try {
        const n = await filmModel.del(id);
        res.json({
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


router.patch('/:id', validate(filmSchemas.film_update_schema), async function (req, res) {
    const id = req.params.id || 0;
    const film = req.body;
    try {
        const n = await filmModel.patch(id, film);
        res.json({
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