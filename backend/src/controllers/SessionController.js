const conn = require('../database/connection');

module.exports = {

    async login(request, response) {
        const { id } = request.body;

        const ong = await conn('ong')
            .where('id', id)
            .select('name')
            .first();

        if (!ong) {
            response.status(400).json({error: 'ONG não encontrada'})
        }

        return response.json(ong);
    }
};