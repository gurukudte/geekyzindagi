import styled from "styled-components";
import { NavBar } from "../Navbar/NavBar";

export const Home: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Content>
        <div className="wrapper">
          <div className="heroimage">
            <img
              src="https://ni-assets.azureedge.net/neverinstall-assets/homepage/heroimageBars.png"
              alt=""
            />
          </div>
          <div className="light">
            <img
              src="https://ni-assets.azureedge.net/neverinstall-assets/homepage/heroGradientFinal1.png"
              alt=""
            />
          </div>
        </div>
      </Content>
    </div>
  );
};

const Content = styled.div`
  background-color: #1a1a28;
  height: 100%;
  .heroimage {
    img {
      top: 0;
      width: 98vw;
    }
  }
  .light {
    img {
      height: 101vh;
      position: absolute;
      width: 96vw;
      top: 0px;
      right: 0px;
    }
  }
`;
