import{createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const params = {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    tiers: '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  }
const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key':  '158f9dd3ecmsh3d09c8c78eaee87p147d01jsnf35761eaccac',
};
const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url)=>({method:'GET',url,params,headers:cryptoApiHeaders});
export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=> ({
         getCryptos:builder.query({
             query:(count)=> createRequest(`/coins?limit=${count}`),
         })
    })
});

export const  {useGetCryptosQuery} = cryptoApi ;