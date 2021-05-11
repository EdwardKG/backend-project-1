import React, {useRef} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import {FormControl, Input, InputLabel, Button, Popover} from "@material-ui/core";

import useSignUpData from "./useSignUpData";
// interface ISignupData{
//     name:string,
//     changeName:typeof useCallback,
//     email:string,
//     changeEmail:typeof useCallback,
//     password:string,
//     changePassword:typeof useCallback,
//
// }

const SingUpComponent: React.FC = () => {

    const [name,changeName,email,changeEmail,password,changePassword,onSubmit,popupState,popupSetState]:any = useSignUpData();
    const anchorElRef= useRef<HTMLBaseElement>();
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
                            <Input type="password" id="passwordInput" value={password} onChange={changePassword} placeholder="type your password here" ref={anchorElRef}/>
                             <Popover
                               open={popupState}
                               onClose={()=>{popupSetState(false)}}
                               anchorEl={anchorElRef.current}
                               anchorOrigin={{
                                   vertical :'bottom',
                                   horizontal:'center',
                               }}
                               transformOrigin={{
                                   vertical: 'top',
                                   horizontal: 'center',
                               }}
                             >
                              Sorry! Your password must contain at least 8 characters, one letter and one number
                             </Popover>
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
