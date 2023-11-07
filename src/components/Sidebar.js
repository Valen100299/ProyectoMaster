import { NavLink } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
const Sidebar = () => {
    return (
        <div className="sidebar bg-light">
            <ul>
                <li>
                    <NavLink to="/" className="text-dark rounded py-2 w-100 d-inline-block px-3" 
                    activeClassName="active" ><FaIcons.FaHome className="me-2"/> 
                    Home</NavLink>

                </li>
                <li>
                    <NavLink to="/data" className="text-dark rounded py-2 w-100 d-inline-block px-3" 
                    activeClassName="active" ><FaIcons.FaDatabase className="me-2"/> 
                    Data</NavLink>
                    
                </li>
            </ul>
        </div>
    )
   }

   export default Sidebar