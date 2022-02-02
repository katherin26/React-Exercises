import React, { useState, useEffect } from "react";
import { useChatContext } from "stream-chat-react";

import { SearchIcon } from "../assets";

/*NOTE: Event.preventDefault = we have to do this every time that you have an input or buttons or things like
that, because the usual browser behavior is whenever you click submit or something similar to reload
the page, we're working with react , we want everything to be reactive instantaneous and we want to
prevent that.*/

const ChannelSearch = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const getChannels = async (text) => {
    try {
      //TODO: fetch channels
    } catch (error) {
      setQuery("");
    }
  };

  const onSearch = (event) => {
    event.preventDefault();

    setLoading(true);
    setQuery(event.target.value);
    getChannels(event.target.value);
  };

  return (
    <>
      <div className="channel-search__container">
        <div className="channel-search__input__wrapper">
          <div className="channel-search__input__icon">
            <SearchIcon />
          </div>
          <input
            className="channel-search__input__text"
            placeholder="Search"
            type="text"
            value={query}
            onChange={onSearch}
          />
        </div>
      </div>
    </>
  );
};

export default ChannelSearch;
