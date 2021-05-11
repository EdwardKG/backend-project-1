import {useDispatch} from "react-redux";
import React, {BaseSyntheticEvent, useCallback, useState} from "react";
import {SIGNUP_ACTION, SIGNUP_DATA} from "../../redux/actions/actions";
const useSignUpData =()=>{
  const dispatch = useDispatch();
  const [name,setName] = useState<string>("");
  const [email,setEmail] = useState<string>("");
  const [password,setPassword] = useState<string>("");
  const [popupState,setPopupState] = useState<boolean>(false);
  const passwordRule = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const onSubmit=(e:BaseSyntheticEvent)=>{
    e.preventDefault();
    if(passwordRule.test(password)){
      dispatch({type:SIGNUP_DATA,payload:{name,email,password}});
      dispatch({type: SIGNUP_ACTION});
      setName("");
      setEmail("");
      setPassword('')
    }
    else{
      setPopupState(true);
      return;
    }
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
  return [name,changeName,email,changeEmail,password,changePassword,onSubmit,popupState,setPopupState];
}
export default useSignUpData;
