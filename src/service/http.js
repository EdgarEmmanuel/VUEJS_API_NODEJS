import axios from 'axios';

var httpOptions = {"Authorization":"563492ad6f917000010000017aee5c04dcc34ca885e2c891d09e0573"};


var instance = axios.create({headers:httpOptions});


export default instance;
