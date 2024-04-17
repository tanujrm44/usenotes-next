import React from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      Header from view page!!
      {children}
    </div>
  )
}
