import axios from 'axios';

const url = "https://rossino-work-orders.herokuapp.com/";
export default axios.create({baseURL: url})