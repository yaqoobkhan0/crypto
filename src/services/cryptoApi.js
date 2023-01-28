import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
	'X-RapidAPI-Key': 'b355c15985msh80b9224321ab0c7p1d10ddjsndc0f21e6a95d',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};

const baseUrl ='https://coinranking1.p.rapidapi.com/coins';

const creatRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
	reducerPath: "createApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: (count) => creatRequest(`/coins?limit=${count}`),
		}),

		getCryptoDetails: builder.query({
			query: (coinId) => creatRequest(`/coin/${coinId}`),
		}),

		getCryptoHistory: builder.query({
			query: ({ coinId, timeperiod }) =>
				creatRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
		}),
	}),
});

export const {
	useGetCryptosQuery,
	useGetCryptoDetailsQuery,
	useGetCryptoHistoryQuery,
} = cryptoApi;
