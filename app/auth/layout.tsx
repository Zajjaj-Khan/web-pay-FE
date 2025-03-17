import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3674B5] to-[#A1E3F9]">{children}</div>
  )
}

export default layout