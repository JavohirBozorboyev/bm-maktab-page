export const AppNavData = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Teacher",
    path: "/teachers",
  },
  {
    name: "Student",
    path: "/students",
  },
  {
    name: "Subjects",
    path: "/subjects",
    open: false,
    sub: [
      { name: "Matematika", path: "/subjects/0" },
      { name: "Dasturlash", path: "/subjects/1" },
      { name: "Ingliz-tili", path: "/subjects/2" },
      { name: "Rus-tili", path: "/subjects/3" },
      { name: "Kimyo", path: "/subjects/4" },
      { name: "Bialogiya", path: "/subjects/5" },
    ],
  },
];

export type AppNavDataType = {
  name: string;
  path: string;
  open?: boolean;
  sub?: {
    name: string;
    path: string;
  }[];
};
