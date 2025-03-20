import { Card } from '@/components/ui/card'
import React from 'react'

import { CardWrapper } from '@/components/auth/CardWrapper'
function page() {
  return (
    <CardWrapper 
    headerLabel="Create an Account"
      backButtonHref="/auth/login"
      backButtonLabel="Already have an account?"
      showSocial
    >page</CardWrapper>
  )
}

export default page