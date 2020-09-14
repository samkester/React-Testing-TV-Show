import axios from "axios";

const showAPI = "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes";

export const fetchShow = () => {
    return axios.get(showAPI)
    .then(response => {return response})
}