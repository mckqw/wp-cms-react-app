import {useRef, useState} from 'react';
import {Avatar, Popover} from '@material-ui/core';
import {AvatarMenuContainer, MenuContainer, MenuLink} from "./styles";
import {logout} from "../actions/auth"
import {useDispatch} from "react-redux";


const AvatarWithMenuPopover = (popoverContent) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const containerRef = useRef();
    const dispatch = useDispatch()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        dispatch(logout())
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <AvatarMenuContainer ref={containerRef}>
            <Avatar aria-describedby={id}
                    color="primary"
                    onClick={handleClick}
            />
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                container={containerRef.current}
            >
                <MenuContainer>
                    <MenuLink onClick={handleLogout}> Logout </ MenuLink>
                </MenuContainer>
            </Popover>
        </AvatarMenuContainer>
    );
}

export default AvatarWithMenuPopover;
