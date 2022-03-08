import React, { useEffect } from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";

import useStyles from "./styles";

/*NOTE: count = num of pages,we need to convert this dinamically to fetch the number of pagination.
    page= current page
    renderItem= we are going to return a pagination item.
    
    we are going to import this inside the of our Home component.
*/
function Paginate({ page }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (page) dispatch(getPosts(page));
  }, [page]);

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={5}
      page={1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/posts?page=${1}`} />
      )}
    />
  );
}
export default Paginate;
