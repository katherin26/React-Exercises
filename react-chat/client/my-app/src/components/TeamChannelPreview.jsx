import React from "react";
import { Avatar, useChatContext } from "stream-chat-react";

//NOTE: The props we need is channel and type

const TeamChannelPreview = ({
  setActiveChannel,
  setIsCreating,
  setIsEditing,
  setToggleContainer,
  channel,
  type,
}) => {
  const { channel: activeChannel, client } = useChatContext();

  const ChannelPreview = () => (
    <p className="channel-preview__item">
      # {channel?.data?.name || channel?.data?.id}
    </p>
  );

  /*NOTE: DIRECT PREVIEW 
  The data We get back  is  an object like this : 
  {
    '123' : {}  
    '123' : {}  
    '123' : {}  
    '123' : {}  

  }
we need to turn an object to simply an array of objects that we can map through , so let's use the built
in javascript Object.values() once we get that we also want to filter through that, so we can call the 
filter method, filter accepts a callback function and in this case we want to filter through the members
so inside filter we get each member but to get the data about that member we have to destructure it and then 
specify the user, so this is how we're accessing each specific user in that object. 

Then we want to check if the user.id is not equal to client.userID  
  */
  const DirectPreview = () => {
    const members = Object.values(channel.state.members).filter(
      ({ user }) => user.id !== client.userID
    );
    console.log(members);

    return (
      <div className="channel-preview__item single">
        <Avatar
          image={members[0]?.user?.image}
          name={members[0]?.user?.fullName || members[0]?.user?.id}
          size={24}
        />
        <p>{members[0]?.user?.fullName || members[0]?.user?.id}</p>
      </div>
    );
  };

  return (
    <>
      <div
        className={
          channel?.id === activeChannel?.id
            ? "channel-preview__wrapper__selected"
            : "channel-preview__wrapper"
        }
        onClick={() => {
          setIsCreating(false);
          setIsEditing(false);
          setActiveChannel(channel);

          if (setToggleContainer) {
            setToggleContainer((prevState) => !prevState);
          }
        }}
      >
        {type === "team" ? <ChannelPreview /> : <DirectPreview />}
      </div>
    </>
  );
};

export default TeamChannelPreview;
