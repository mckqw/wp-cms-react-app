import styled from "styled-components";
import {FormControl, makeStyles} from "@material-ui/core";


export const useStyles = makeStyles((theme) => ({
    FormContainer: {
        top: '25%',
        zIndex: '1',
        background: '#FFFFFF',
        margin: '0 auto 100px',
        padding: '45px',
        textAlign: 'center',
        boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)',
        '& :before': {
            content: "",
            display: 'block',
            clear: 'both',
        }
    },
    CollapseWrapper:{
        '& .MuiCollapse-wrapper': {
            minWidth: 300,
        }
    },
    FormControl:{
        width: '100%'
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

export const LoginPageContainer = styled('div')`
  margin: 0 auto;
  text-align: center;
  position: relative;
  height: 100%;
`