import tasks_logo from '../assets/tasks_logo.svg'
import {useCallback, useReducer} from "react";
import TaskList from "./TaskList";
import {
    MainContent,
    MainHeader,
    MainLogo,
    HeaderAvatarContainer,
    MainContainer
} from "./styles";
import AvatarWithMenuPopover from "./AvatarWithMenuPopover";
import Footer from "./GlobalFooter";
import Resume from './resume'
import Posts from './Posts'

const initialMenuState = {view: 'taskList'}

const menuReducer = (state, action) => {
    switch (action.type) {
        case 'taskList':
            return {view: 'taskList'};
        case 'posts':
            return {view: 'posts'};
        case 'resume':
            return {view: 'resume'};
        default:
            return {view: 'taskList'};
    }
}

const Main = () => {

    const [menuState, dispatch] = useReducer(menuReducer, initialMenuState)

    const handleSetMenuView = (view) => {
        dispatch({
            type: view
        })
        scrollToTop()};

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };


    return (
        <MainContainer>
            <MainHeader>
                <MainLogo
                    src={tasks_logo}
                    alt="logo"/>
                <HeaderAvatarContainer>
                    <AvatarWithMenuPopover
                    />
                </HeaderAvatarContainer>
            </MainHeader>
            <MainContent>
                {menuState.view === 'taskList' ? <TaskList/> : <></>}
                {menuState.view === 'resume' ? <Resume/> : <></>}
                {menuState.view === 'posts' ? <Posts/> : <></>}
            </MainContent>
            <Footer handleSetMenuView={handleSetMenuView}/>
        </MainContainer>
    );
}

export default Main;
