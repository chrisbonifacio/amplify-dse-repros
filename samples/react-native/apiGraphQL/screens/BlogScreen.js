import React from 'react';
import {Text, View} from 'react-native';
import {fetchBlogByID} from '../api/blogs';

const BlogScreen = ({route, navigation}) => {
  const {id} = route.params;
  const [blog, setBlog] = React.useState(null);

  React.useEffect(() => {
    fetchBlogByID(id).then(res => setBlog(res));
  }, [id]);

  return (
    <View>
      <Text>{blog?.name}</Text>
    </View>
  );
};

export default BlogScreen;
