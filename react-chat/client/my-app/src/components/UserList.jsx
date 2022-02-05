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
const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const { client } = useChatContext();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const getUsers = async () => {
      if (loading) return;

      setLoading(true);

      try {
      } catch (error) {}
    };
  }, [filters]);

  return (
    <>
      <ListContainer>UserList</ListContainer>
    </>
  );
};

export default UserList;
