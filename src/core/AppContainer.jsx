import React, { Suspense } from 'react'

import Routes from './Routes'
import "./index.scss"

const AppContainer = () => {
  return (
    <main className='app-conatainer'>
      <section className='card'>
        <div className='card-body'>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes />
          </Suspense>
        </div>
      </section>
    </main>
  )
}

export default AppContainer
