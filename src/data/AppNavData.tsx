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
      { name: "Matematika", path: "/subjects/math" },
      { name: "Dasturlash", path: "/subjects/it" },
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
