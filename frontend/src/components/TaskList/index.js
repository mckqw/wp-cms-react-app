import {useEffect, useState} from "react";
import {
    EmptyListLabel,
    Footer,
    Tasks,
    TasksList,
    TaskListContainer,
    InputContainer
} from "./styles";
import TasksListItem from "./TaskListItem";
import TaskListLoader from "../loaders/TaskListLoader";
import {
    TextField,
    Button,
    makeStyles,
    Typography, CircularProgress
} from "@material-ui/core";
import {Autocomplete} from "@material-ui/lab";
import * as Utils from '../../utilities'

const TASKS_URL = `http://wp.tasks.docker/wp-json/wp/v2/posts`;
const TAG_URL = `http://wp.tasks.docker/wp-json/wp/v2/tags`;

const TaskList = () => {
    const [tasks, setTasks] = useState(null);
    const [tags, setTags] = useState(null);
    const [loadingTasks, setLoadingTasks] = useState(true);
    const [loadingTags, setLoadingTags] = useState(true);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        async function loadTasks() {
            new Promise((resolve, reject) => {
                Utils.getPosts(TASKS_URL, [], resolve, reject, '&categories=195')
            })
                .then(response => {
                    // const filteredTasks = response.filter((element) => {
                    //     return element.categories.includes(195);
                    // })
                    console.log(response)
                    setTasks(response);
                    setLoadingTasks(false);
                })
        }

        async function loadTags() {
            new Promise((resolve, reject) => {
                Utils.getPosts(TAG_URL, [], resolve, reject,'')
            })
                .then(response => {
                    const filteredTags = response.filter((element) => {
                        return element.id !== 195;
                    })
                    setTags(filteredTags);
                    setLoadingTags(false);
                })
        }

        loadTasks()
            .then(loadTags);
    }, []);

    const updateTasksList = (index) => {
        const tempTasks = [...tasks];
        if (index > -1) {
            tempTasks.splice(index, 1);
        }
        setTasks(tempTasks);
    }

    const useStyles = makeStyles((theme) => ({
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
            textTransform: "none"
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
        tagOptions: {
            '& .MuiAutocomplete-option': {
                justifyContent: 'center'
            }
        }
    }));

    const renderTagOptionItems = (option, loading) => {
        return (loading === false) ? <Typography key={option.id}>{option.name}</Typography> :
            <CircularProgress key={'circularProgress'}
                size={20}
            />
    }

    const handleSubmit = () => {

    }

    const classes = useStyles();
    return (
        <TaskListContainer>
            <Tasks>
                {loadingTasks && <TaskListLoader/>}
                {!loadingTasks && tasks != null && !tasks.length ?
                    <EmptyListLabel
                    variant="header"
                    component="h2">
                        Sorry, your task list is empty.
                    </EmptyListLabel> : <></>}
                <TasksList>
                    {tasks ? tasks.map((task, index) => (
                            <TasksListItem task={task} index={index} callback={updateTasksList}/>
                    )) : null}
                </TasksList>
            </Tasks>

            <Footer>
                <InputContainer>
                    <form className={classes.form}
                          noValidate
                          onSubmit={handleSubmit} >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="title"
                            label="Task Title"
                            name="title"
                            autoFocus
                            onChange={e => setTitle(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="description"
                            label="Description"
                            id="description"
                            onChange={e => setDescription(e.target.value)}
                        />
                        <Autocomplete
                            id="tag-picker"
                            options={tags ? tags : [{'name':'loading','loading':true}]}
                            getOptionDisabled={(option) => option.loading}
                            getOptionLabel={(option) => option.name}
                            classes={{ paper: classes.tagOptions }}
                            renderInput={(params) => (
                                <TextField {...params}
                                           margin="normal"
                                           label="Tags"
                                           variant="outlined" />
                            )}
                            renderOption={(option) => renderTagOptionItems(option, loadingTags)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Add Task
                        </Button>
                    </form>
                </InputContainer>
            </Footer>
        </TaskListContainer>
    );
};

export default TaskList;