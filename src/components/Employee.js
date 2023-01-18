function Employee(props) {

  return (
    <>
      <h2> Hey, Employee {props.name} </h2>
      <h3> Hey, Employee {props.detail_name},  {props.detail_age} </h3>
      {props.role ? (
        <p > {props.role} </p>
      ) : (
        <p > No role </p>
      )}
    </>
  );
}

export default Employee;
