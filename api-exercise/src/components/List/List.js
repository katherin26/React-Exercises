import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";

function ListComponent() {
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "blue" }}>
              {" "}
              <CloudOutlinedIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText />
        </ListItem>
      </List>
    </>
  );
}

export default ListComponent;
