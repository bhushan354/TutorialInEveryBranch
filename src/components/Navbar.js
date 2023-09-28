import { CartIcon } from "../icons";
import { useSelector as UseSelector } from 'react-redux';
import { store } from "../store";

const Navbar = () => {
    console.log(UseSelector((store) => {
        console.log(store); 
    }));
  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
            <CartIcon />
            <div className="amount-container">
                <p className="total-amount">0</p>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;