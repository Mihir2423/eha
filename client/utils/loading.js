import React from 'react'
import { Rings } from  'react-loader-spinner'

export default function Loading() {
  return (
    <div>
    <Rings
    height="80"
    width="80"
    color="#4fa94d"
    radius="6"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel="rings-loading"
  />
    </div>
  )
}
