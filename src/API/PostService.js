import axios from 'axios';

export default class PostService {
    static async getAll(limit = 9, page = 1) {
        const response = await axios.get('/products.json', {
            params: {
                _limit: limit,
                _page: page,
            },
        });
        return response;
    }
}
