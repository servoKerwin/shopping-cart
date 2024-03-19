import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{ width: "3em", height: "3em", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="25 0 576 300"
              fill="currentColor"
            >
              <g
                id="_16579655411555590644"
                data-name="16579655411555590644"
                transform="translate(0.5 -54.967)"
              >
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M197.918,309.218a30.991,30.991,0,1,0,31.031,31.023A30.962,30.962,0,0,0,197.918,309.218Z"
                  stroke="#707070"
                  stroke-width="1"
                />
                <path
                  id="Path_2"
                  data-name="Path 2"
                  d="M324.356,309.218a30.991,30.991,0,1,0,31.01,31.023A30.977,30.977,0,0,0,324.356,309.218Z"
                  stroke="#707070"
                  stroke-width="1"
                />
                <path
                  id="Path_3"
                  data-name="Path 3"
                  d="M349.675,171.213H172.548l7.07,23.274H342.66Z"
                  stroke="#707070"
                  stroke-width="1"
                />
                <path
                  id="Path_4"
                  data-name="Path 4"
                  d="M328.585,240.96l7.031-23.232H186.684l7.057,23.232Z"
                  stroke="#707070"
                  stroke-width="1"
                />
                <path
                  id="Path_5"
                  data-name="Path 5"
                  d="M155.2,113.707,165.457,148H380.442L345.391,264.081H176.977L113.783,55.467H0V89.5H88.269l63.338,208.853H370.65l56.017-184.648Z"
                  stroke="#707070"
                  stroke-width="1"
                />
              </g>
            </svg>

            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
}
