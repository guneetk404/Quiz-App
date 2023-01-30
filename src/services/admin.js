import axios from "axios";

const baseUrl = 'http://localhost:5000/admin'


export default {

    createQuiz:function(path,data){
        return axios.post(baseUrl+path,data);
    }
}