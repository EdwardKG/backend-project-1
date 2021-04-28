import React, {BaseSyntheticEvent, useCallback, useState} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import {FormControl, Input, InputLabel, Button} from "@material-ui/core";
import {SIGNUP_ACTION, SIGNUP_DATA} from "../../redux/actions/actions";
import {useDispatch} from "react-redux";


const SingUpComponent: React.FC = () => {
    const dispatch = useDispatch();
    const [name,setName] = useState<string>("");
    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const onSubmit=(e:BaseSyntheticEvent)=>{
        e.preventDefault();
        dispatch({type:SIGNUP_DATA,payload:{name,email,password}});
        dispatch({type: SIGNUP_ACTION});
    }
    const changeName = useCallback((event:React.BaseSyntheticEvent)=>{
        setName(event.target.value);
    },[]);
    const changeEmail = useCallback((event:React.BaseSyntheticEvent)=>{
        setEmail(event.target.value);
    },[]);
    const changePassword = useCallback((event: React.BaseSyntheticEvent)=>{
        setPassword(event.target.value);
    },[]);
    return (
        <Container maxWidth={"md"}>
            <form onSubmit={onSubmit}>
                <Grid container direction="column" justify="space-around" alignItems="center"  spacing={4}  >
                    <Grid item>
                        <Typography variant="h3"> Register new account</Typography>
                    </Grid>
                    <Grid item>
                        <FormControl>
                            <InputLabel htmlFor="nameInput">Name</InputLabel>
                            <Input type="text" id="nameInput" value={name} onChange={changeName} placeholder="type your name here"/>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl>
                            <InputLabel htmlFor="emailInput">Email</InputLabel>
                            <Input type="email" id="emailInput" value={email} onChange={changeEmail} placeholder="type your email here"/>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl>
                            <InputLabel htmlFor="passwordInput">Password</InputLabel>
                            <Input type="password" id="passwordInput" value={password} onChange={changePassword} placeholder="type your password here"/>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <Button type="submit" variant={"outlined"} color={"default"}>Register</Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}
export default SingUpComponent;
