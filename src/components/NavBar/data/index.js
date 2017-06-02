// set data
var navbar = {};
navbar.brand = 
  {linkTo: "#", text: "Hoe Or No!"};
navbar.links = [
   {linkTo: "#", text: "log out"},
  // {linkTo: "#", text: "Link 2"},
  {dropdown: true, text: "MENU", links: [
    {linkTo: "#", text: "Browse"},
    {linkTo: "#", text: "Profile", active: true}
  ]}
];