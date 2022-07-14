import styled from 'styled-components';
import { getUser} from './getUsers'
import React from "react";

export default (props:any) => {
    if (props.id === null) return (<div></div>);
const [data, setData] = React.useState<any>({});
React.useEffect(() => {
    getUser(props.id)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [props.id]);
  return (<User ><h1>{data.firstName} {data.lastName}</h1> <br/>
  <img src={data.picture} style={{width: '10vh' }} /> <br/>
  <p>Email: {data.email}</p> <br/>
  <p>Gender: {data.gender}</p> <br/>
  <p>Phone: {data.phone}</p> <br/>
  <p>DateOfBirth: {new Date(data.dateOfBirth).toString()}</p> <br/></User>)}


const User = styled.div`
    position: fixed;
    top: 0;
    left: 30vh;
    width: 70vh
`