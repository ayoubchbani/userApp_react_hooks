import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UsersLists from './components/UsersLists';
import UserContextProvider from './contexts/UserContext';

const App =()=> {
  return (
    <div >
      <UserContextProvider>
        <UsersLists />
      </UserContextProvider>  
    </div>
  );
}

export default App;
