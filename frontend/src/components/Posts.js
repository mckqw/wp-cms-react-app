import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import {Avatar, Typography} from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';

import {useEffect, useState} from "react";
import {HoverCard} from "./styles";
import * as Utils from "../utilities";
import PostCardLoader from "./loaders/PostCardLoader";

const POST_URL = `http://wp.tasks.docker/wp-json/wp/v2/posts`;
const NUM_ROWS = 8;

const Posts = () => {
    const [posts, setPosts] = useState(null);
    const [authors, setAuthors] = useState(null);

    useEffect(() => {
        async function loadPost() {

            new Promise((resolve, reject) => {
                Utils.getPosts(POST_URL, [], resolve, reject,'')
            })
                .then(response => {
                    const filteredPosts = response.filter((element)=>{
                        return !element.categories.includes(195);
                    })

                    response.forEach((post, id) => {
                        post._links.author.forEach((author, index) => {
                            fetch(`${author.href}`).then((value) => {
                                value.json().then((data) => {
                                    setAuthors(prevAuthors => ({
                                        ...prevAuthors,
                                        author: {postId: id, data: data}
                                    }))
                                });
                            })
                        });
                    })

                    setPosts(filteredPosts);
                })
        }
        loadPost();
    }, []);

    const skeletonCards = () => {
        let rows = [];
        for (let i = 0; i < NUM_ROWS; i++) {
            rows.push(
                <Grid item md={8} lg={3}>
                    <HoverCard>
                        <PostCardLoader/>
                    </HoverCard>
                </Grid>
            );
        }
        return <>{rows}</>;
    }

    return (
        <Grid container spacing={4}>
            {posts ? posts.map((post, index) => (
                <Grid item  md={8} lg={3} key={index}>
                    <HoverCard>
                        <CardContent>
                            <Typography
                                gutterBottom
                                dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                            <Typography
                                variant="body2"
                                component="p"
                                dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
                                <AvatarGroup max={4}>
                                    {authors ? <Avatar alt={authors.author.data.name}
                                                       src={authors.author.data.avatar_urls[96]}
                                    /> : <Avatar />}
                                </AvatarGroup>
                        </CardContent>
                    </HoverCard>
                </Grid>
            )) :
                <Grid container spacing={4}>
                    {skeletonCards()}
                </Grid>}
        </Grid>
    );
};

export default Posts;