import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

//we get this api in getStream.io
const apiKey = "n54zxeg3zknf";
const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChanellListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
};

export default App;
