import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {IInfoGuest} from "@/store/info_about_guest/info_guest.types";

export const info_guestApi = createApi({
  reducerPath: 'api/info_guest',
  baseQuery: fetchBaseQuery({ baseUrl: '#'}),
  endpoints: build => ({
    getInfoGuest: build.query<IInfoGuest[], number>({query: () => `ingo_guest`})
  })
})

export const {} = info_guestApi
