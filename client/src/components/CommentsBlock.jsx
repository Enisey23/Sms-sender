import React from "react";
import { TitleBlock } from "./TitleBlock";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Skeleton from "@mui/material/Skeleton";
import { useSelector, useDispatch} from "react-redux";
import { fetchPosts, fetchPostsGet } from "../redux/slisces/posts";

export const CommentsBlock = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  React.useEffect(() => {
  dispatch(fetchPostsGet());
  }, []);
  
  console.log(posts.items)

  const isLoading = posts.status === 'loading';

  return (
    <TitleBlock title="Отправленные сообщения">
    <List>
      {(isLoading ? [...Array(5)] : posts.items).map((obj, index) => (
        <React.Fragment key={index}>
          <ListItem alignItems="flex-start">
            {isLoading ? (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Skeleton variant="text" height={25} width={120} />
                <Skeleton variant="text" height={18} width={230} />
              </div>
            ) : (
              <ListItemText
                primary={`Номер получателя: ${obj.phone}`}
                secondary={obj.text}
              />
            )}
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
  </TitleBlock>
  );
};
