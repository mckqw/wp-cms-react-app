import axios from 'axios'

export const getPosts = (url, posts, resolve, reject, params, page = 1) => {
    axios.get(`${url}?page=${page}${params}`)
        .then(response => {
            const retrievedPosts = posts.concat(response.data)
            if (response.data.length === 10) {
                ++page;
                getPosts(url, retrievedPosts, resolve, reject, params, page)
            } else {
                resolve(retrievedPosts)
            }
        })
        .catch(error => {
            console.log(error)
        })
}

// export const createPost = (url, data, resolve, reject) => {
//     axios.post(url,data)
//         .then(response => {
//             if
//         })
// }