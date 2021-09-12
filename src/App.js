import React from 'react';
import Messenger from './componetnts/Messenger';
import AccountProvider from './context/AccountProvider';





const App = () => (
  <>

<AccountProvider>

 <Messenger/>
</AccountProvider>


  
    
  </>
)

export default App;
