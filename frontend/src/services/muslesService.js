import axios from "axios";

export default class MusclesService {
    static async getMuscles(userName) {
        return axios.get('http://localhost:5000/api/v1/users/{userName}');
    }
}