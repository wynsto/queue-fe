import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createQueue, getQueues } from './queueAPI';

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

export const getQueuesAsync = createAsyncThunk(
    'queue/getQueues',
    async (data) => {
        const response = await getQueues(data)
        return response
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
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createQueueAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createQueueAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.queues.push(action.payload);
            })
            .addCase(getQueuesAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getQueuesAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.queues = action.payload;
            });
    },
})

export const { create, setModalStatus } = queueSlice.actions

export const selectQueue = (state) => {
    return state.queue
}

export default queueSlice.reducer;

  