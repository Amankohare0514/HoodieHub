import { AuthProvider } from '@/context/AuthProvider'
import React from 'react'
import Home from './home/page'

const page = () => {

  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  )
}

export default page