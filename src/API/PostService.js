import axios from 'axios';

export default class PostService {
    static async getAllProducts(limit = 9, page = 1) {
        const response = await axios.get('/products.json', {
            params: {
                _limit: limit,
                _page: page,
            },
        });
        return response;
    }
    static async getAllPosts() {
        const response = await axios.get('/posts.json');
        return response;
    }
}
