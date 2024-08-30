import React, { useContext } from 'react'
import { Context } from './js/store/appContext.js'

const Home = () => {

    const { store, actions } = useContext(Context);

    actions.exampleFunction()
  return (
    <div>
        <h5> {store.personas} </h5>

    </div>
  )
}

export default Home