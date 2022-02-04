import React from "react";
import { Channel, userChatContext } from "stream-chat-react";
import { ChannelInner, CreateChannel, EditChannel, TeamMessage } from "./";

const ChannelContainer = ({
  isCreating,
  setIsCreating,
  isEditing,
  setIsEditing,
  createType,
}) => {
  /*NOTE: The information about the current specific channel. Then we need to know are we currently creating
  that channel then we have to show a specific message or a dashboard for creating that channel.
  So we have to have a variable called is creating and if we are creating we want to return a specific jsx.
  block. Then we're also going to have one more state which is editing.
  These are some states that we always need to be aware of 
  */

  const { channel } = userChatContext();

  if (isCreating) {
    return (
      <div className="channel__container">
        <CreateChannel createType={createType} setIsCreating={setIsCreating} />
      </div>
    );
  }

  if (isEditing) {
    return (
      <div className="channel__container">
        <EditChannel setIsEditing={setIsEditing} />
      </div>
    );
  }

  return <div>ChannelContainer</div>;
};

export default ChannelContainer;
