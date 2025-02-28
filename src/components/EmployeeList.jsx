import EmployeeListItem from "./EmployeeListItem";

function EmployeeList({ employees }) {
  //console.log(props);
  return (
    <div
      style={{
        border: "3px solid purple",
        padding: "5px",
        marginbottom: "5px",
      }}
    >
      {/* <h3>EmployeeList</h3> */}
      {employees.map((employee, index) => (
        <EmployeeListItem
          //key is usually id however in my small data I did not put id so index will be the key for now.
          key={index}
          name={employee.name}
          position={employee.position}
          image={employee.image}
        />
      ))}
    </div>
  );
}

export default EmployeeList;
