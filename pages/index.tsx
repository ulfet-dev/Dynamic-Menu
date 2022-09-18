import type { NextPage } from "next";
import { mainMenu, subMenu1, subMenu2 } from "../AllData";

const Home: NextPage = () => {
  return (
    <>
      {mainMenu.filter(Boolean).map((mainMenuItem) => (
        <ul id="menu">
          <li className="parent">
            <a href="#">{mainMenuItem}</a>
            <ul className="child">
              {subMenu1.filter(Boolean).map((subMenu1Item) => (
                <li className="parent">
                  {subMenu1Item
                    .toString()
                    .split(".")[1]
                    .includes(mainMenuItem.toString().split(".")[1]) ? (
                    <a href="#">
                      <>
                        {" "}
                        {subMenu1Item} <span className="expand">»</span>{" "}
                      </>
                    </a>
                  ) : null}

                  <ul className="child">
                    {subMenu2.filter(Boolean).map((subMenu2Item) => (
                      <li>
                        {subMenu2Item
                          .toString()
                          .split(".")[1]
                          .includes(mainMenuItem.toString().split(".")[1]) &&
                        subMenu2Item
                          .toString()
                          .split(".")[2]
                          .includes(subMenu1Item.toString().split(".")[2]) ? (
                          <a href="#">{subMenu2Item}</a>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      ))}
    </>
  );
};

export default Home;
