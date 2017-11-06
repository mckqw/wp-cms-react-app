import axios from 'axios'

export const getPosts = (url, posts, resolve, reject, page = 1) => {
    axios.get(`${url}?page=${page}`)
        .then(response => {
            const retrievedPosts = posts.concat(response.data)
            if (response.data.length === 10) {
                ++page;
                getPosts(url, retrievedPosts, resolve, reject, page)
            } else {
                resolve(retrievedPosts)
            }
        })
        .catch(error => {
            console.log(error)
        })
}