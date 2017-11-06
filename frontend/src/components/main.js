import logo from '../assets/logo.svg';
import Posts from "./Posts";
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

const Main = () => {
    return (
        <MainContainer>
            <MainHeader>
                <MainLogo
                    src={logo}
                    alt="logo"/>
                <HeaderAvatarContainer>
                    <AvatarWithMenuPopover
                    />
                </HeaderAvatarContainer>
            </MainHeader>
            <MainContent>
                <TaskList/>
                {/*<Posts/>*/}
            </MainContent>
            <Footer/>
        </MainContainer>
    );
}

export default Main;
