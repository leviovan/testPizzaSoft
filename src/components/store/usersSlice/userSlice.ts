import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface UserState {
    id: number
    name: string
    isArchive: boolean
    role: string
    phone: string
    birthday: string
}
export interface UsersState {
   users: UserState[] 
   error:string
   isLoading:boolean
   usersFilter: UserState[] 
}
const initialState: UsersState = {
    users:[],
   usersFilter:[],
    error:"string",
    isLoading:false

}
export const fetchUsers= createAsyncThunk(
  'users/fetch',
  async () => {
    const response = await fetch(`http://localhost:3000/users`)
    return (await response.json()) as  UserState[]
  },
)

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    changeRole:(state,{payload})=>{     
      state.usersFilter = state.usersFilter.map((user)=> user.id === payload.id ? {...user,role:payload.role}: user)
      state.users = state.users.map((user)=> user.id === payload.id ? {...user,role:payload.role}: user)
      console.log(state.usersFilter);
      
    },
    changeArchive:(state,{payload})=>{
        state.users = state.users.map((user)=> user.id === payload.id ? {...user, isArchive:!user.isArchive}: user)
        state.usersFilter = state.usersFilter.map((user)=> user.id === payload.id ? {...user, isArchive:!user.isArchive}: user)
    },
    sortUserBy:(state,{payload})=>{
      state.usersFilter.sort((a,b)=>{
      const nameA = a[payload as keyof typeof a]; 
      const nameB = b[payload as keyof typeof a]; 
      if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      }   
      )      
    },
    filterBy:(state,{payload})=>{
      const {status,role}=payload
      role ? status ? state.usersFilter =state.users.filter((user)=>(user.role===role && user.isArchive===false))
                    : state.usersFilter =state.users.filter((user)=>(user.role===role && user.isArchive ===true))
           : status ? state.usersFilter =state.users.filter((user)=>(user.isArchive===false))
                    : state.usersFilter =state.users.filter((user)=>(user.isArchive===true))
    },
    resetFilter:(state)=>{
     state.usersFilter =state.users
    }
  },
   extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.users = payload
      state.isLoading = false
      state.usersFilter=payload
    })
      builder.addCase(fetchUsers.pending, (state ) => {
      state.isLoading = true
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.error as string
        state.isLoading = false
    })
  },
})

export const {changeRole,changeArchive,sortUserBy,filterBy,resetFilter  } = userSlice.actions

export default userSlice.reducer