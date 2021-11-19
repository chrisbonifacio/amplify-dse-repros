import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {fetchBlogByID} from '../api/blogs';

const BlogScreen = ({route, navigation}) => {
  const {id} = route.params;
  const [blog, setBlog] = React.useState(null);
  const [comment, setComment] = React.useState('');

  React.useEffect(() => {
    fetchBlogByID(id).then(res => setBlog(res));
  }, [id]);

  return (
    <View>
      <View>
        <Text>{blog?.name}</Text>
      </View>
      <View style={styles.form}>
        <Text>Leave a comment</Text>
        <TextInput
          placeholder="Start writing..."
          value={comment}
          onChangeText={text => setComment(text)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    alignItems: 'flex-end',
    height: 100,
  },
});

export default BlogScreen;
