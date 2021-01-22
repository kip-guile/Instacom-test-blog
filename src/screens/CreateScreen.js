import React from 'react'
import { StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import Form from '../components/Form'
import { createPostActionCreator } from '../store/blogPosts'

const CreateScreen = ({ navigation }) => {
  const dispatch = useDispatch()

  return (
    <Form
      onSubmit={(title, content) => {
        dispatch(createPostActionCreator({ title, content }))
        navigation.navigate('Index')
      }}
    />
  )
}

const styles = StyleSheet.create({})

export default CreateScreen
