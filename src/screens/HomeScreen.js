import React, { useContext } from 'react';
import { StyleSheet, View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const HomeScreen = () => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  return <View>
    <Text>HomeScreen !</Text>
    <Button title='Add Post' onPress={addBlogPost} />
    <FlatList
      data={state}
      keyExtractor={blogPost => blogPost.title}
      renderItem={({ item }) => {
        return <View style={styles.row}>
          <Text style={styles.title}>{item.title} - {item.id}</Text>
          <TouchableOpacity onPress={() => { deleteBlogPost(item.id) }}>
            <Feather name='trash' style={styles.icon}></Feather>
          </TouchableOpacity>
        </View>
      }} />
  </View>
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24
  },
});

export default HomeScreen