export default {
    actor_schema: {
        type: 'object',
        properties: {
            first_name: { type: 'string' },
            last_name: { type: 'string' }
        },
        required: ['first_name', 'last_name'],
        additionalProperties: false
    },

    actor_update_schema: {
        type: 'object',
        properties: {
            first_name: { type: 'string' },
            last_name: { type: 'string' }
        },
        anyOf: [
            {
                required: ['first_name', 'last_name']
            },
            {
                required: ['first_name']
            },
            {
                required: ['last_name']
            },

        ],
        additionalProperties: false
    }
}