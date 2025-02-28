import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";
import face from "../assets/face.jpg";

function Homepage() {
  
  const employees = [
    { name: "James King", position: "President and CEO", image: face },
    {
      name: "Julie Taylor",
      position: "VP of Marketing",
      image:
        "https://media.istockphoto.com/id/2099403180/photo/laughing-yougn-businesswoman-standing-with-her-arms-crossed-against-an-office-wall.webp?a=1&b=1&s=612x612&w=0&k=20&c=fd9yaVrgWeZIHTfllbUmxTjPRVD2b79Yzt4HQlQfNSA=",
    },
    { name: "Jennifer Lee", position: "CFO", image: "https://cdn.pixabay.com/photo/2023/12/05/18/15/ai-generated-8432244_1280.jpg" },
    { name: "John Williams", position: "VP of Engineering", image: "https://img.freepik.com/free-photo/portrait-boy-with-backpack_23-2151835181.jpg?ga=GA1.1.1457243223.1740163646&semt=ais_hybrid" }
  ];

  return (
    <div style={{border: "3px solid yellow", padding: "5px", width: "50%"}}>
      <h1>Homepage</h1>
      <Header />
      <SearchBar />
      <EmployeeList employees={employees} />
    </div>
  );
}

export default Homepage;
