export const AllData = [
  {
    code: "MENU.001",
    title: "Menu Name 1",
  },
  {
    code: "MENU.001.001",
    title: "Menu Name 1 Submenu 1",
  },
  {
    code: "MENU.001.002",
    title: "Menu Name 1 Submenu 2",
  },
  {
    code: "MENU.001.003",
    title: "Menu Name 1 Submenu 3",
  },
  {
    code: "MENU.001.001.001",
    title: "Menu Name 1 Submenu 1 Child 1",
  },
  {
    code: "MENU.001.001.002",
    title: "Menu Name 1 Submenu 1 Child 2",
  },
  {
    code: "MENU.001.001.003",
    title: "Menu Name 1 Submenu 1 Child 3",
  },
  {
    code: "MENU.002",
    title: "Menu Name 2",
  },
  {
    code: "MENU.002.001",
    title: "Menu Name 2 Submenu 1",
  },
  {
    code: "MENU.002.002",
    title: "Menu Name 2 Submenu 2",
  },
  {
    code: "MENU.002.003",
    title: "Menu Name 2 Submenu 3",
  },
  {
    code: "MENU.002.001.001",
    title: "Menu Name 2 Submenu 1 Child 1",
  },
  {
    code: "MENU.002.001.002",
    title: "Menu Name 2 Submenu 1 Child 2",
  },
  {
    code: "MENU.002.001.003",
    title: "Menu Name 2 Submenu 1 Child 3",
  },
  {
    code: "MENU.003",
    title: "Menu Name 3",
  },
  {
    code: "MENU.003.001",
    title: "Menu Name 3 Submenu 1",
  },
];




// Static - 3 levels
export const mainMenu = AllData.map(
    (dd) => dd.code.split(".").length - 1 === 1 && dd.code
  );

export const subMenu1 = AllData.map(
  (dd) => dd.code.split(".").length - 1 === 2 && dd.code
);

export const subMenu2 = AllData.map(
  (dd) => dd.code.split(".").length - 1 === 3 && dd.code
);
