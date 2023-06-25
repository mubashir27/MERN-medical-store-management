import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AddForm from "./components/AddForm/AddForm";
import AddMedicine from "./components/AddMedicine/AddMedicine";
import Home from "./components/Home/Home";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/addForm" exact element={<AddForm />} />
          <Route path="/addMedicine" exact element={<AddMedicine />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
// medi show ho rahin hongi sare main page mai

// add medicine by shop keeper: jo medi add hogi uss ki quantitu add hojaya ge

// new order by customer: customer new order is page sa kara ga or jitna order kara ga
// utna main page mai jo quantity show ho rahi hogi vo kam hojaya ge
