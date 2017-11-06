import styled from "styled-components";
import { border, color, layout, space } from 'styled-system'
import {TextField, Typography, withStyles} from "@material-ui/core";

export const EmptyListLabel = styled(Typography)`
  text-align: center;
  ${space}
`

EmptyListLabel.defaultProps = {
    pt: 2
}

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  padding: 1.5rem;
  padding-right: 3rem;
  align-self: flex-start;
  text-transform: uppercase;
  box-shadow: 0 -10px 10px 0 rgba(1, 1, 1, 0.05);
  ${space}
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`

export const Tasks = styled.div`
  ${space}
`

Tasks.defaultProps = {
    py: '1.5rem',
    px: '2rem'
}

export const TasksInput = withStyles({
    root: {
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: '2px solid grey'
        },
        '& .MuiInput-underline:after': {
            borderBottom: '2px solid black'
        },
        '&:nth-child(2)': {
            paddingTop: '5%',
        },
        marginRight: '5%',
    },
})(TextField);


export const TasksAddContainer = styled.div`
  position: relative;
  display: table-cell;
  vertical-align: middle;
`

export const TasksAdd = styled.button`
  transition: all 0.30s ease-in-out;
  width: 3rem;
  height: 3rem;
  background: ${props => props.theme.colors.link.hover};
  color: white;
  text-align: center;
  font-size: 2rem;
  font-weight: 300;
  border-radius: .75rem;
  border: 0;
  outline: 0;
  will-change: transform;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  
  &:hover {
    background: ${props => props.disabled ? props.theme.colors.link.hover : props.theme.colors.link.base};
  }

  &:active {
    -ms-transform: translateY(-50%) scale(.95);
    transform: translateY(-50%) scale(.95);
  }
`

export const TasksList = styled.ul`
  list-style-type: none;
  ${space}
`

TasksList.defaultProps = {
    pl: 0
}

export const TaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-shadow: 0 20px 30px 0 rgba(1, 1, 1, 0.07);
  ${color}
  ${layout}
  ${space}
  ${border}
`
TaskListContainer.defaultProps = {
    mx: '10%',
    my: '2%',
    maxWidth: 500,
    borderRadius: 1,
    p: 0,
    bg: 'white',
}