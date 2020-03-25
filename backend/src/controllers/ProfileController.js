const conn = require('../database/connection');

module.exports = {
    async list(request, response) {    
        const ong_id = request.headers.authorization;

        const incidents = await conn('incident')
            .where('ong_id', ong_id)
            .select('*');

        return response.json(incidents);
    }
};