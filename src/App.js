import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import SearchBarWithFilter from "./components/SearchBarWithFilter";
import Subheader from "./components/Subheader";
import Headder from "./components/Headder";

function App(){
    return(
        <>
        <div>
            <Headder/>
            <Subheader/>
            <SearchBar/>
        </div>
        <div className="cources">
        <Card imglink="https://via.placeholder.com/150" courseName="Joy of Computing using Python" courseCat="Programming" courseTime="6-12 Hours"/>
        <Card imglink="https://via.placeholder.com/150" courseName="Mathemeatics" courseCat="Programming" courseTime="6-12 Hours"/>
        <Card imglink="https://via.placeholder.com/150" courseName="Cyber Physical Systems" courseCat="Programming" courseTime="6-12 Hours"/>
        <Card imglink="https://via.placeholder.com/150" courseName="Physics" courseCat="Programming" courseTime="6-12 Hours"/>
        <Card imglink="https://via.placeholder.com/150" courseName="Physics" courseCat="Programming" courseTime="6-12 Hours"/>
        <Card imglink="https://via.placeholder.com/150" courseName="Physics" courseCat="Programming" courseTime="6-12 Hours"/>
        </div>
        </>
    );
}

export default App;