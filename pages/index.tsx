import type { NextPage } from "next";
import { AllData } from "../AllData";

const Home: NextPage = () => {
  let newArrayy;
  let lastPart;
  let newMenu: any[] = [];
  let parentArray: any[] = [];

  AllData.map((dd) =>
    dd.code.split(".").length - 1 >= 2
      ? ((lastPart = dd.code.slice(0, -4)),
        (newArrayy = {
          code: dd.code,
          title: dd.title,
          parent: lastPart,
        }),
        newMenu.push(newArrayy))
      : ((newArrayy = {
        code: dd.code,
        title: dd.title,
        parent: null,
      }),
        // newMenu.push(newArrayy),
        parentArray.push(newArrayy))
  );

  console.log({ newMenu });

  let groupByParent = newMenu.reduce((group, menuLabel) => {
    const { parent } = menuLabel;
    group[parent] = group[parent] ?? [];
    group[parent].push(menuLabel);
    return group;
  }, {});
  console.log({ groupByParent });

  // let AllKeys = Object.keys(groupByParent);
  // console.log({AllKeys}, AllKeys.length, AllKeys[1]);


for (const [key, value] of Object.entries(groupByParent)) {
  console.log(key, value);
}

  return (
    <div style={{ padding: "10px" }}>
      <p>Dynamic n levels</p>
      {parentArray.map((p) => (
        <ul id="menu">
          <li className="parent">
            <>
              <a href="#">{p.title}</a>
              <ul className="child">
                {newMenu
                  .filter((newM) => newM.parent?.includes(p.code))
                  .map(
                    (menu) =>
                      menu.code.length <= 12 && (
                        <li className="parent" style={{ width: "260px" }}>
                          <a href="#">{menu.title}</a>
                          <ul className="child">
                            {newMenu
                              .filter((newM) => newM.parent?.includes(p.code))
                              .map((menu) => (
                                <li
                                  className="parent"
                                  style={{ width: "260px" }}
                                >
                                  <a href="#">{menu.title}</a>
                                </li>
                              ))}
                          </ul>
                        </li>
                      )
                  )}
              </ul>
            </>
          </li>
        </ul>
      ))}

      {/* <br />
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
      ))} */}
    </div>
  );
};

export default Home;
