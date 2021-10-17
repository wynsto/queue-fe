import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createQueue } from './queueAPI';

const initialState = {
    isShowForm: false,
    status: 'idle',
    queues: []
};

export const createQueueAsync = createAsyncThunk(
      'queue/createQueue',
      async (data) => {
        const response = await createQueue(data)
        return response.data
      }
  )

export const queueSlice = createSlice({
    name: 'queue',
    initialState,
    reducers: {
        create: (state, action) => {
            state.queues.push(action.payload)
        },
        setModalStatus: (state, action) => {
            state.isShowForm = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createQueueAsync.pending, (state) => {
            state.status = 'loading';
            })
            .addCase(createQueueAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.queues.push(action.payload);
            });
    },
})

export const { create, setModalStatus } = queueSlice.actions

export const selectQueue = (state) => {
    return state.queue
}

export default queueSlice.reducer;

  