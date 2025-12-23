import { createSelector,createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const sectionsAdapter = createEntityAdapter({
    selectId: section => section._id
})

const initialState = sectionsAdapter.getInitialState();

export const sectionsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllSections: builder.query({
            query: (filter = {}) =>{
                const queryParams = new URLSearchParams(filter).toString()
                return `/sections${queryParams ? `?${queryParams}`:""}`
            },
            transformResponse: responseData => {
                return sectionsAdapter.setAll(initialState,responseData)
            },
            providesTags: (result,error,arg) => [
                {type:"Section",id:"LIST"},
                ...(result?.ids || []).map((id)=>({type:"Section",id}))
            ]
        }),
        addNewSection: builder.mutation({
            query: initialSectionData => ({
                url:"/sections",
                method: "POST",
                body: {...initialSectionData}
            }),
            invalidatesTags: [{ type:"Section",id:"LIST"}]
        }),
        updateSection: builder.mutation({
            query: initialSectionData => ({
                url:"/sections",
                method: "PATCH",
                body: {...initialSectionData}
            }),
            invalidatesTags: (result,error,arg) => [
                {type:"Section",id:arg.id},
                {type:"Section",id:"LIST"}
            ]
        }),
        deleteSection: builder.mutation({
            query: ({id}) => ({
                url:"/sections",
                method:"DELETE",
                body:{id}
            }),
            invalidatesTags: (result,error,arg) => [{type:"Section",id:arg.id}]
        }),
    })
})

export const {
    useGetAllSectionsQuery,
    useAddNewSectionMutation,
    useUpdateSectionMutation,
    useDeleteSectionMutation,
} = sectionsApiSlice;

export const selectSectionsResult = sectionsApiSlice.endpoints.getAllSections.select()

const selectSectionsData = createSelector(
    selectSectionsResult,
    sectionsResult => sectionsResult.data
)

export const {
    selectAll: selectAllSections,
    selectById: selectSectionById,
    selectIds: selectSectionsId
} = sectionsAdapter.getSelectors(
    state => selectSectionsData(state) ?? initialState
)