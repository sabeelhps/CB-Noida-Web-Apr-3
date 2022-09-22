import React,{Fragment} from 'react';
import MainNavigayion from './MainNavigayion';

const Layout = (props) => {
  return (
      <Fragment>
          <header>
              <MainNavigayion/>
          </header>
          
          <main style={{marginTop:'15.5rem'}}>
                {props.children}
          </main>

          <footer>
              
          </footer>
    </Fragment>
  )
}

export default Layout;