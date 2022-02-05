import React, { useState } from "react";
import {
  MessageList,
  MessageInput,
  Thread,
  window,
  useChannelActionContext,
  Avatar,
  useChannelContext,
  userChatContext,
} from "stream-chat-react";
import { ChannelInfo } from "../assets";

export const GiphyContext = React.createContext({});

const ChannelInner = ({ setIsEditing }) => {
  const [giphyState, setGiphyState] = useState(false);
  const { sendMessage } = useChannelSActionContext();

  const overrideSubmitHandler = (message) => {
    let updateMessage = {
      attachments: message.attachments,
      mentioned_users: message.mentioned_users,
      parent_id: message.parent?.id,
      parent: message.parent,
      text: message.text,
    };
  };

  return <div></div>;
};

export default ChannelInner;
