import axios from 'axios'

export function fetchUsers(language){
    var encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=starts:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
    return {
        type: 'FETCH_USER',
        payload: axios.get(encodedURI)
    }
}