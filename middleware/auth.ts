import { $axios } from '~/utils/api'
import { ProxyRequestObject, ResponseObject } from 'Http'

export default async function({ app, store, redirect, route }: any) {
  return true
  // if (process.client) {
  //   const token = app.$cookies.get('accessToken')
  //   if (token) {
  //     const requestBody: ProxyRequestObject = {
  //       endpoint: '/api/Accounts/@me',
  //       token,
  //       method: 'get'
  //     }
  //     try {
  //       const result: ResponseObject = await $axios.post('/api', requestBody)
  //       if (Number(result.data.syscode) !== 200) {
  //         redirect('/account')
  //       } else {
  //         store.commit('auth/setUser', result.data.data)
  //       }
  //     } catch (e) {
  //       // console.log('Validation Error: ', e)
  //       redirect('/account')
  //     }
  //   } else {
  //     // console.log('No Token Found')
  //     redirect('/account')
  //   }
  // }
}
