import db from "../utils/db.js";
export default {
    findAll: () => {
        return db('actor');
    },

    findById: async (id) => {
        const list = await db('actor').where('actor_id', id);
        if (list.length === 0) {
            return null;
        }

        return list[0];
    },

    add: (entity) => {
        return db('actor').insert(entity);
    },

    del: (id) => {
        return db('actor').where('actor_id', id).del();
    },

    patch: (id, entity) => {
        return db('actor').where('actor_id', id).update(entity);
    },
}