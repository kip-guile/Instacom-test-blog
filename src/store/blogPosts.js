import {
  createSlice,
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import { v1 as uuid } from 'uuid'

const initialState = [
  {
    title: 'React Native',
    content: 'Smooth if you know React!',
    id: uuid(),
  },
]

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
          id: uuid(),
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
