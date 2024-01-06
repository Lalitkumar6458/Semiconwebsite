"use client"
import React from 'react'
import { ThemeProvider as ThemeWrraper } from "next-themes"
const ThemeProvider = ({children,...props }) => {
  return (
   <ThemeWrraper  {...props}>{children}</ThemeWrraper>
  )
}

export default ThemeProvider