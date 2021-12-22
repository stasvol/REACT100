import React from 'react'
import {Suspense} from 'react'

export function withLazySuspense  <WCP>(WrappedComponent:React.ComponentType <WCP>) {

    return ( (props:WCP) => {

        return  <Suspense fallback={<div>Loading...</div>}>
                          <WrappedComponent {...props}/>
                   </Suspense>

        }
    )

}