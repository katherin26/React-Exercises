import React from "react";

import { AddChannel } from "../assets";

//NOTE: if error we are going to return something but before we have to check out the type, if the type
//is equal to team then we want to return an error message . and if not team we simply want to return null.

//NOTE: if loading, we are gonna return the same paragraph. but at the end we are goona add loading.

const TeamChannelList = ({ children, error = false, loading, type }) => {
  if (error) {
    return type === "team" ? (
      <div className="team-channel-list">
        <p className="team-channel-list__message">
          Connection error, please wait a moment and try again.
        </p>
      </div>
    ) : null;
  }

  if (loading) {
    return (
      <div className="team-channel-list">
        <p className="team-channel-list__message loading">
          Connection error, please wait a moment and try again.
        </p>
      </div>
    );
  }

  return (
    <>
      <div></div>
    </>
  );
};

export default TeamChannelList;
