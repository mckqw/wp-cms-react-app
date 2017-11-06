import styled from "styled-components";
import {border, color, position, space, typography} from "styled-system";

export const CloseButton = styled.button`
  position: absolute;
  transition: all 0.30s ease-in-out;
  right: -2.65rem;
  top: 1rem;
  outline: 0;
  font-size: 1.5rem;
  &:hover{
    opacity: .75;
  }
  ${border}
  ${color}
  ${position}
`

CloseButton.defaultProps = {
    position: 'absolute',
    color: 'transparent',
    bg: 'transparent',
    border: 'none',
    lineHeight: '.85rem',
}


export const TasksListItemContainer = styled.li`
  transition: all 0.30s ease-in-out;
  box-shadow: 0 20px 30px 0 rgba(1, 1, 1, 0.07);
  font-weight: 600;
  position: relative;
  will-change: transform;

  &:hover {
    border-right: 55px solid red;
    transition: all 0.30s ease-in-out;
    transform: scale(1.05);
    z-index: 20;
    box-shadow: 0 20px 30px 0 rgba(1, 1, 1, 0.2);
  }
  &:hover ${CloseButton}{
    color: white;
  }
  
  &:active ${CloseButton}{
    -ms-transform: scale(.95);
    transform: scale(.95);
  }
  ${border}
  ${color}
  ${space}
  ${typography}
`

TasksListItemContainer.defaultProps = {
    p: '1.25rem',
    color: 'text',
    fontSize: '1rem',
    letterSpacing: '.03rem',
    borderRadius: '.75rem',
    bg: 'background',
    mb: 1,
    borderRight: '0px solid lightgray',
}
