import React from 'react'
import { useEffect } from 'react'
export const dynamicTab = (content) => 
{
    useEffect(()=>
    {
        document.title=`${content}/aniflix-v2`

    })
  return null
}
