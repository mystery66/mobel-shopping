import axios from 'axios'
export const HOST = 'https://www.easy-mock.com/mock/5bd806c77fee63796b7ffb45/mobleshopping'

export const ERR_OK = 200;

export function getSwiperImg() {
  const url = HOST + '/swiper'
  return axios.get(url)
}

export function getRecommend() {
  const url = HOST + '/Recommend'
  return axios.get(url)
}

export function getList() {
  const url = HOST + '/list'
  return axios.get(url)
}

export function getDetailList() {
  const url = HOST + '/detaillist'
  return axios.get(url)
}

export function getCategoryList() {
  const url = HOST + '/categorylist'
  return axios.get(url)
}

export function getGoodsList() {
  const url = HOST + '/goodslist'
  return axios.get(url)
}