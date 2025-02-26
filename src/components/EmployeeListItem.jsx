import face from "../assets/face.jpg"
function EmployeeListItem() {
    return(
        <div>
            <img src={face} style={{width:"100px"}}></img>
            <h3>Tatiana's Employees</h3>
            <h4>President and CEO</h4>
        </div>
    )

    
}

export default EmployeeListItem