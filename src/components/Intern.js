const intern1 = {
  firstname : "Mike", lastname : "Jacob"
};

const intern2 = {
  firstname : "Dominion", lastname : "City"
};

function showIntern(intern) {
  return(
    <h3> How are you? {intern.firstname} {intern.lastname}</h3>
  )
}


function Intern (props) {

  return (
    <>
      <h2> Hey, Intern {props.intern_name}, you're {props.intern_age} years old, right? </h2>
      <h3> {showIntern(intern1)} and {showIntern(intern2)} </h3>
    </>
  );
}

export default Intern;
