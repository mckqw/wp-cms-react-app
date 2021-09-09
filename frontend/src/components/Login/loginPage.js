import { useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import {useStyles} from './styles'

import {login, validate, register} from "../../actions/auth"
import {Button, TextField, FormControl, Typography, Collapse} from "@material-ui/core"
import {
    FormContainer,
    LoginPageContainer
} from "./styles";

const LoginPage = () => {

    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState(false)

    const { message } = useSelector(
        state => ({ message: state.message.message })
    )
    const [collapsed, setCollapsed] = useState(false);


    const handleRegister = (e) => {
        e.preventDefault();

        setSuccess(false)
        if (username !== "" && email !== "" && password !== "") {
            dispatch(register(username, email, password))
                .then(() => {
                    setSuccess(true)
                })
                .catch(() => {
                    setSuccess(false)
                });
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();

        setSuccess(false)
        if (email !== "" && password !== "") {
            dispatch(login(email, password))
                .then((response) => {
                    dispatch(validate(response))
                        .then(()=>{
                            setSuccess(true)
                        })
                })
                .catch(() => {
                    setSuccess(false)
                });
        }
    }

    const classes = useStyles();

        return (
            <LoginPageContainer>
                <FormControl className={classes.FormContainer}>
                    <Collapse in={collapsed} className={classes.CollapseWrapper}>
                        <FormControl className={classes.FormControl}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoFocus
                                onChange={e => setUsername(e.target.value)}/>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type={'password'}
                                id="password"
                                onChange={e => setPassword(e.target.value)}/>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="email"
                                label="Email Address"
                                id="email"
                                onChange={e => setEmail(e.target.value)}/>
                            <Button
                                className={classes.submit}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={handleRegister}
                            >
                                Create
                            </Button>
                            <Typography>Already registered? <a href="#" onClick={()=>setCollapsed(!collapsed)}>Sign In</a></Typography>
                        </FormControl>
                    </Collapse>
                    <Collapse in={!collapsed} className={classes.CollapseWrapper}>
                        <FormControl className={classes.FormControl}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="email"
                                label="Email Address"
                                id="email"
                                onChange={e => setEmail(e.target.value)}/>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                type={'password'}
                                name="password"
                                label="Password"
                                id="password"
                                onChange={e => setPassword(e.target.value)}/>
                            <Button
                                className={classes.submit}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={handleLogin}
                            >
                                Login
                            </Button>
                            <Typography>Not registered? <a href={'#'} onClick={()=>setCollapsed(!collapsed)}>Register</a></Typography>
                        </FormControl>
                    </Collapse>
                    <Typography>{message}</Typography>
                </FormControl>
            </LoginPageContainer>
        )
}

export default LoginPage