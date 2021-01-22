import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

const PostScreen = ({ route }) => {
  const id = route.params.id
  const posts = useSelector((state) => state.posts)
  const blogPost = posts.find((blogPost) => blogPost.id === id)
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 24,
  },
})

export default PostScreen
