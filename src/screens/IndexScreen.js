import React, { useContext, useEffect } from 'react'
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Feather } from '@expo/vector-icons'
import { deletePostActionCreator } from '../store/blogPosts'

const IndexScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts)
  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Post', { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity>
                  <Feather
                    style={styles.icon}
                    name='trash'
                    onPress={() =>
                      dispatch(deletePostActionCreator({ id: item.id }))
                    }
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
})

export default IndexScreen
