import React from 'react'
import { StyleSheet } from 'react-native'
import Form from '../components/Form'
import { useDispatch, useSelector } from 'react-redux'
import { editPostActionCreator } from '../store/blogPosts'

const EditScreen = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const id = route.params.id
  const posts = useSelector((state) => state.posts)
  const blogPost = posts.find((blogPost) => blogPost.id === id)

  return (
    <Form
      onSubmit={(title, content) => {
        dispatch(editPostActionCreator({ id, title, content }))
        navigation.pop()
      }}
      initialValues={{ title: blogPost.title, content: blogPost.content }}
    />
  )
}

const styles = StyleSheet.create({})

export default EditScreen
