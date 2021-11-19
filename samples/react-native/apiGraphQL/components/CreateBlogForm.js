import {API} from 'aws-amplify';
import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {createBlog} from '../src/graphql/mutations';

const CreateBlogForm = ({navigation}) => {
  const [values, setValues] = React.useState({
    name: '',
  });

  const createNewBlog = async () => {
    try {
      await API.graphql({
        query: createBlog,
        variables: {
          input: {
            name: values.name,
          },
        },
      });

      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.form}>
      <View>
        <TextInput
          style={styles.input}
          name="name"
          type="text"
          value={values.name}
          onChangeText={text => setValues(prev => ({...prev, name: text}))}
        />
      </View>
      <View>
        <Button title="Create" onPress={createNewBlog} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    flexDirection: 'row',
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
    width: 150,
  },
});

export default CreateBlogForm;
