import Header from "./Header"
import SearchBar from "./SearchBar"
import EmployeeList from "./EmployeeList"
function Homepage() {
    return(
        <div>
            <h1>Homepage</h1>
            <Header/>
            <SearchBar/>
            <EmployeeList/>
        </div>
    )

    
}

export default Homepage