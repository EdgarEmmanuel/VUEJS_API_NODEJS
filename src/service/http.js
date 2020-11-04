import axios from 'axios';

var httpOptions = {"Authorization":"<YOUR-AUTHORIZATION_KEY>"};


var instance = axios.create({headers:httpOptions});


export default instance;
