import React from "react";

import { AddChannel } from "../assets";

//NOTE: if error we are going to return something but before we have to check out the type, if the type
//is equal to team then we want to return an error message . and if not team we simply want to return null.

//NOTE: if loading, we are gonna return the same paragraph. but at the end we are goona add loading.
//Inside we are gonna write , if type === 'team' we want to say channels or messages

const TeamChannelList = ({
  children,
  error = false,
  loading,
  type,
  isCreating,
  setIsCreating,
  setCreateType,
  setIsEditing,
  setToggleContainer,
}) => {
  if (error) {
    return type === "team" ? (
      <div className="team-channel-list">
        <p className="team-channel-list__message">
          Error de conexion, por favor espera un momento y inteta nuevamente.
        </p>
      </div>
    ) : null;
  }

  if (loading) {
    return (
      <div className="team-channel-list">
        <p className="team-channel-list__message loading">
          {type === "team" ? "Channels" : "Messages"} loading ...
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="team-channel-list">
        <div className="team-channel-list__header">
          <p className="team-channel-list__header__title">
            {type === "team" ? "Channels" : "Direct Messages"}
          </p>
          <AddChannel
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            setCreateType={setCreateType}
            setIsEditing={setIsEditing}
            type={type === "team" ? "team" : "messaging"}
            setToggleContainer={setToggleContainer}
          />
        </div>
        {children}
      </div>
    </>
  );
};

export default TeamChannelList;
