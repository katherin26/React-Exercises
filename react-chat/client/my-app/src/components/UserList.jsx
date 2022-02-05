import React, { useEffect, useState } from "react";
import { Avatar, useChatContext } from "stream-chat-react";

import { InviteIcon } from "../assets";

const ListContainer = ({ children }) => {
  return (
    <div className="user-list__container">
      <div className="user-list__header">
        <p>User</p>
        <p>Invite</p>
      </div>
      {children}
    </div>
  );
};

const UsetItem = () => {
  return (
    <div className="user-item__wrapper">
      <div className="user-item__name-wrapper">
        <Avatar />
      </div>
    </div>
  );
};

//NOTE: UseEffect : We wanna call it once filters change, because sometimes we want the users for direct messages and
//sometimes when filters change we want users only for channel messages.
//What are we wanna do with client?? well down below we can say const response is = to await client.queryUsers().
//This is going to allow us to query all the users based on specific parameters like
/*
{id: {$ne: client.userID}}

basically, we are excluding the queering of users for the user with the current id, We don't want to find 
ourselves there because we are the people aadding different users to the channel. 
*/
const UserList = () => {
  const { client } = useChatContext();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      if (loading) return;

      setLoading(true);

      try {
        const response = await client.queryUsers({ id: { $ne: client.useID } });
      } catch (error) {}
    };
  }, []);

  return (
    <>
      <ListContainer>UserList</ListContainer>
    </>
  );
};

export default UserList;
