import React from "react"

type Params = {
  params: {
    id: string
  }
}

export default function Page({ params }: Params) {
  return <div>{params.id}</div>
}
