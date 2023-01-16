import './App.css';
import Employee from './components/Employee';


const user = {
  firstname : 'Amu',
  lastname : 'Nnamdi'
};

function formatName(user) {
  return user.firstname + " " + user.lastname;
}

const emp_check = false;

function App() {
  return (
    <div className="App">
      <h1> Hey, {formatName(user)}! </h1>
      { emp_check ? 
      ( 
            <>
            <Employee/>
            <Employee/>
            <Employee/>
            <Employee/>
            <Employee/>
          </>
    ) : (
      <p> You cannot see the employees </p>
    )}
    </div>
  );
}

export default App;
