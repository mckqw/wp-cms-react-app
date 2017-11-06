import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import {Avatar, Typography} from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';

import {useEffect, useState} from "react";
import {HoverCard} from "./styles";

const POST_URL = `http://wp.tasks.docker/wp-json/wp/v2/posts?per_page=100`;

const Posts = () => {
    const [posts, setPosts] = useState(null);
    const [authors, setAuthors] = useState(null);

    useEffect(() => {
        async function loadPost() {
            const response = await fetch(POST_URL);
            if(!response.ok) {
                // oups! something went wrong
                return;
            }

            const posts = await response.json();

            const filteredPosts = posts.filter((element)=>{
                return !element.categories.includes(195);
            })

            setPosts(filteredPosts);
            posts.forEach((post, id) => {
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
        }
        loadPost();
    }, []);

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
            )) : <Typography>Not Found</Typography>}
        </Grid>
    );
};

export default Posts;