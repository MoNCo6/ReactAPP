import React from "react";
import  {getUsers} from "./getUsers"
import {Virtuoso} from 'react-virtuoso'
import styled from 'styled-components';
import User from "./User";

function LoadBackground() {
  const [page, setPage] = React.useState(0);
  const [data, setData] = React.useState<any[]>([]);
  const [userID, setUserID] = React.useState(null);
  
  React.useEffect(() => {
    getUsers(page)
      .then((response) => setData(_data=>[..._data, ...response.data.data]))
      .catch((error) => console.log(error));
  }, [page]);

  const loadMore = React.useCallback(() => setPage(page + 1), [page])

  return (<div><Virtuoso
    style={{
      height: "100vh",
      width : "30vh",
      outline: "none",
      overflowY: "auto",
      position: "relative",}}
    data={data}
    overscan={200}
    endReached={loadMore}
    itemContent={(index,item) =>  <Person><img src={item.picture} style={{width: '7vh' }} /> <a  href="javascript:void(0)" onClick={() => setUserID(item.id)}>{item.firstName + ' ' + item.lastName}</a></Person>}
  /><User id={userID}  /></div>)
  
}

const Person = styled.div`
    display: flex;
    gap: 16px;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid gray;
    -webkit-box-align: center;
    align-items: center;
    margin: 8px;
    `
    
export default LoadBackground;