import type { NextPage } from "next";
import { AllData, mainMenu, subMenu1, subMenu2 } from "../AllData";

const Home: NextPage = () => {
  let index = 0;
  let fLength: number;
  let lLength: number;
  let subMenu: any[] = [];
  let newArrayy: any[] = [];

  // const LiFun = () => {
  //   for (let i = 1; i <= AllData.length; i++) {
  //     let nn = 8;
  //     AllData.map(
  //       (dd, index) => (
  //         dd.code.split(".").length - 1 === i &&
  //         dd.code === dd.code.slice(0, nn) &&
  //         ((newArrayy[i] = dd.code
  //           .slice(0, nn)
  //           .match(dd.code)
  //           ?.filter(Boolean)),
  //           console.log(newArrayy[i], { i }, dd.code, { index })
  //           // console.table(newArrayy[i])
  //         ),
  //         (nn += 4)
  //       )
  //     );
  //   }
  // };
  // LiFun();

  const runCallback = (cb: { (): void; (): any }) => {
    return cb();
  };

  return (
    <div style={{ padding: "10px" }}>
      <p>Dynamic n levels</p>
      {AllData.map((newData1) => (
        <ul id="menu">
          <li className="parent">
            <>
              <a href="#">
                {newData1.code.toString().split(".")[index + 1] &&
                  newData1.code.length < 9 &&
                  newData1.title}
              </a>
              <ul className="child">
                <>
                  {runCallback(() => {
                    for (
                      fLength = 9;
                      fLength < newData1.code.length;
                      fLength += 4
                    ) {
                      for (
                        lLength = 13;
                        lLength < newData1.code.length;
                        lLength += 4
                      ) {
                        index += 1;
                        {
                          AllData.map((subMenu1Item) =>
                            subMenu1Item.code.length > fLength &&
                              subMenu1Item.code.length < lLength &&
                              subMenu1Item.code
                                .toString()
                                .split(".")
                              [index].includes(
                                newData1.code.toString().split(".")[index]
                              )
                              ? subMenu.push(subMenu1Item.title)
                              : null
                          );
                        }
                      }
                    }
                  })}
                  <li className="parent">
                    <a href="#">
                      {subMenu.map((sub) => (
                        <span>{sub}</span>
                      ))}
                    </a>
                  </li>
                  {/* {subMenu} */}
                  {/* {LiFun()} */}
                  {/* {subMenu.map((s)=><li> {s}</li>)} */}
                  {/* {<li>{Object.keys(subMenu)} - kk</li>} */}
                  {/* {Object.keys(<li>{subMenu}</li>)} */}
                </>
              </ul>
            </>
          </li>
        </ul>
      ))}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>Static - 3 levels</p>
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
    </div>
  );
};

export default Home;
