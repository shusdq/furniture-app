import axios from 'axios';

export default class PostService {
    static async getComments() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}
