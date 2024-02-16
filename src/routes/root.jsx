import {
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { getContacts, createContact } from "../contacts";
import { BeeLogo } from "../components/bee";

export async function action() {
  const contact = await createContact();
  return { contact };
}

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

export default function Root() {
  const navigate = useNavigate()
  return (
    <>
      <div id="sidebar">

        {/* <button onClick={() => navigate("/")}> */}
        <div style={{height: '100px', border: 'none', marginTop: '20px'}} onClick={()=>{navigate("/")}}>
        <BeeLogo />
        </div>
        
        {/* </button> */}
        <nav>
          <ul>
            <li>
              <Link to={`resources`}>Learn More</Link>
            </li>
            <li>
              <Link to={`puzzle`}>Puzzle Game</Link>
            </li>
            <li>
              <Link to={`quiz`}>Bee Quiz</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        {/* <div style={{ display: "flex", marginBottom: '36px' }}>
          <BeeLogo />
          <h1>Help Save the Bees</h1>
        </div> */}
        <Outlet />
      </div>
    </>
  );
}
