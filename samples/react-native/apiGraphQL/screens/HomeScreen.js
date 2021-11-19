import {useIsFocused} from '@react-navigation/core';
import React from 'react';
import {
  Button,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {deleteBlogByID, fetchBlogs} from '../api/blogs';
import Section from '../components/Section';

const HomeScreen = ({navigation}) => {
  const isFocused = useIsFocused();
  const [blogs, setBlogs] = React.useState([]);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const refreshBlogs = async () => {
    const res = await fetchBlogs();
    setBlogs(res);
  };

  React.useEffect(() => {
    isFocused && refreshBlogs();
  }, [isFocused]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <Header />

      <Button
        title="Create a new Blog"
        onPress={() => navigation.navigate('Create')}
      />

      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        {!blogs.length ? (
          <Text>No blogs found.</Text>
        ) : (
          blogs.map(blog => (
            <Section key={blog.id} title={blog?.name || 'Uh Oh'}>
              {blog?.description}
              <Button
                title="Go to Blog"
                onPress={() => navigation.navigate('Blog', {id: blog.id})}
              />
              <Button
                title="Delete"
                onPress={() => deleteBlogByID(blog.id).then(refreshBlogs)}
              />
            </Section>
          ))
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
