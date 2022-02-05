import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";
import HospitalIcon from "../assets/hospital.png";
import LogoutIcon from "../assets/logout.png";

/*Line 45: Stream allows you to get a channel list component right out of the box */

/*NOTE:  Our sidebar can have an instant return so just parentheses */
/*NOTE: ChannelList is a self-closing component but accepts a few props.
filters: is an object that's going to allow us to filter some messages.
channelRenderFilterFn: This is a function that we can call and based  on that we can also pass on filters.
List : That means that we want to render a custom list, we can do that by providing a callback , we get access
to all the list props right inside of (listProps) and finally we can render the component we've created 
which is called the team channel list.

So stream allows you to get a channel list component right out of the box, but we want to create our own 
team channel list. So that's why we add <TeamChannelList/>
*/

const cookies = new Cookies();

const SideBar = ({ logout }) => (
  <>
    <div className="channel-list__sidebar">
      <div className="channel-list__sidebar__icon1">
        <div className="icon1__inner">
          <img src={HospitalIcon} alt="Hospital" width="30" />
        </div>
      </div>
      <div className="channel-list__sidebar__icon2">
        <div className="icon1__inner" onClick={logout}>
          <img src={LogoutIcon} alt="Logout" width="30" />
        </div>
      </div>
    </div>
  </>
);

/*NOTE: CompanyHeader */

const CompanyHeader = () => (
  <div className="channel-list__header">
    <p className="channel-list__header__text">Medical Pager</p>
  </div>
);

//NOTE:ChannelListContainer.

const ChannelListContainer = ({
  isCreating,
  setIsCreating,
  setCreateType,
  setIsEditing,
}) => {
  //NOTE: We want to clear the cookies and also we want to reload the window.

  const logout = () => {
    cookies.remove("token");
    cookies.remove("userId");
    cookies.remove("username");
    cookies.remove("fullname");
    cookies.remove("avatarURL");
    cookies.remove("hashedPassword");
    cookies.remove("phoneNumber");

    window.location.reload();
  };
  return (
    <>
      <SideBar logout={logout} />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          List={(listProps) => (
            <TeamChannelList
              {...listProps}
              type="team"
              isCreating={isCreating}
              setIsCreating={setIsCreating}
              setCreateType={setCreateType}
              setIsEditing={setIsEditing}
            />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="team" />
          )}
        />
        <ChannelList
          List={(listProps) => (
            <TeamChannelList
              {...listProps}
              type="messaging"
              isCreating={isCreating}
              setIsCreating={setIsCreating}
              setCreateType={setCreateType}
              setIsEditing={setIsEditing}
            />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="messaging" />
          )}
        />
      </div>
    </>
  );
};

export default ChannelListContainer;
