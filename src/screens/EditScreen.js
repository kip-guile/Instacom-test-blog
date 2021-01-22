import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import BlogPostForm from '../components/BlogPostForm'
import { useDispatch } from 'react-redux'

const EditScreen = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const id = nroute.params.id
  const posts = useSelector((state) => state.posts)
  //   const { state, editBlogPost } = useContext(Context)
  const blogPost = posts.find((blogPost) => blogPost.id === id)

  return (
    <BlogPostForm
      onSubmit={(title, content) =>
        dispatch(
          editPostActionCreator(id, title, content, () => navigation.pop())
        )
      }
      initialValues={{ title: blogPost.title, content: blogPost.content }}
    />
  )
}

const styles = StyleSheet.create({})

export default EditScreen
