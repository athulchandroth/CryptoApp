import{createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '7733ca121dmshe585ae357342241p1ef5ddjsn92300da6887a'
  };

  const baseUrl = 'https://bing-news-search1.p.rapidapi.com';
  const createRequest = (url)=>({url,headers:cryptoNewsHeaders});

  export const cryptosNewsApi=createApi({
      reducerPath:'cryptosNewsApi',
      baseQuery:fetchBaseQuery({baseUrl}),
      endpoints:(builder)=>({
          getCryptosNews:builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),

          })
      })
  });

  export const {useGetCryptosNewsQuery} = cryptosNewsApi;