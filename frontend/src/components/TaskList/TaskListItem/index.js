import {CloseButton, TasksListItemContainer} from "./styles";
import {Typography} from "@material-ui/core";
import {useState} from "react";

const TasksListItem = (props) => {

    const [selected, setSelected] = useState(false);

    return (
        <TasksListItemContainer key={props.index} selected={selected}>
            <Typography>{props.task.title && props.task.title.rendered}</Typography>
            <Typography>{props.task.description && props.task.description}</Typography>
            {/*<Typography>{props.task.content && props.task.content.rendered}</Typography>*/}
            <CloseButton onClick={() => {
                setSelected(true);
                props.callback(props.index);
            }}>&#10006;</CloseButton>
        </TasksListItemContainer>
    )
}

export default TasksListItem