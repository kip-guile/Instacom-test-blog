import {
  createSlice,
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import logger from 'redux-logger'

const initialState = [
  {
    title: 'React Native',
    content: 'Smooth if you know React!',
    id: getRandomInt(5000),
  },
]

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

const blopgPostSlice = createSlice({
  name: 'blogPosts',
  initialState,
  reducers: {
    create: {
      reducer: (state, { payload }) => {
        state.push(payload)
      },
      prepare: ({ content, title }) => ({
        payload: {
          id: getRandomInt(5000),
          content,
          title,
        },
      }),
    },
    edit: (state, { payload }) => {
      const index = state.findIndex((post) => post.id === payload.id)
      if (index !== -1) {
        state[index].content = payload.content
        state[index].title = payload.title
      }
    },
    delete: (state, { payload }) => {
      const index = state.findIndex((post) => post.id === payload.id)
      if (index !== -1) {
        state.splice(index, 1)
      }
    },
  },
})

export const {
  create: createTodoActionCreator,
  edit: editTodoActionCreator,
  delete: deleteTodoActionCreator,
} = blopgPostSlice.actions

const reducer = combineReducers({
  posts: blopgPostSlice.reducer,
})

const middleware = [...getDefaultMiddleware(), logger]
export default configureStore({
  reducer,
  middleware,
})
