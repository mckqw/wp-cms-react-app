import {useRef, useState} from 'react';
import {Avatar, makeStyles, Popover} from '@material-ui/core';
import {AvatarMenuContainer, MenuContainer, MenuLink} from "./styles";
import {logout} from "../actions/auth"
import {useDispatch} from "react-redux";
import {useStyles} from "./Login/styles";


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

    const useStyles = makeStyles((theme) => ({
        Avatar:{
            '& .MuiAvatar-root:after': {
                    borderRight: '2px solid',
                    content: "\"\"",
                    display: 'block',
                    height: '8px',
                    marginTop: '-6px',
                    position: 'absolute',
                    MozTransform: 'rotate(135deg)',
                    OTransform: 'rotate(135deg)',
                    WebkitTransform: 'rotate(135deg)',
                    transform: 'rotate(135deg)',
                    right: '10px',
                    top: '50%',
                    width: '0',
            }
        },
    }));
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const classes = useStyles();

    return (
        <AvatarMenuContainer
            ref={containerRef}>
            <Avatar
                aria-describedby={id}
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
