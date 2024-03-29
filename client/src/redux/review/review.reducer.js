import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    loading:false,
    reviews:[],
    providerReviews:[],
    error:""
}
const reviewSlice = createSlice({
    name:"Review",
    initialState,
    reducers:{
        reviewRequest:(state)=>{
            state.loading = true
        },
        providerReviewRequest:(state)=>{
            state.loading = true
            state.providerReviews = []
        },
        allReviewSuccess:(state,action)=>{
            state.loading = false
            state.reviews = action.payload.reviews
        },
        reviewSuccess:(state,action)=>{
            state.loading = false
            state.providerReviews = action.payload.review
        },
        addReviewSuccess:(state,action) =>{
            state.loading = false
            state.reviews.push(action.payload.review)
            window.alert("Review Added Successfully")
        },
        reviewFail:(state,action)=>{
            state.loading = false
            state.error = action.payload
        }
    }
})

export const {reviewRequest,providerReviewRequest,reviewSuccess,reviewFail,addReviewSuccess,allReviewSuccess} = reviewSlice.actions

export default reviewSlice.reducer