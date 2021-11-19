import {API} from 'aws-amplify';
import {deleteBlog} from '../src/graphql/mutations';
import {getBlog, listBlogs} from '../src/graphql/queries';

export const fetchBlogs = async () => {
  try {
    const res = await API.graphql({query: listBlogs});
    console.log(res.data.listBlogs.items);
    return res.data.listBlogs.items;
  } catch (error) {
    console.log(error);
  }
};

export const fetchBlogByID = async id => {
  try {
    const res = await API.graphql({
      query: getBlog,
      variables: {id},
    });

    return res.data.getBlog;
  } catch (error) {
    console.log(error);
  }
};

export const deleteBlogByID = async id => {
  try {
    const res = await API.graphql({
      query: deleteBlog,
      variables: {input: {id}},
    });

    return res.data.deleteBlog;
  } catch (error) {
    console.log(error);
  }
};
