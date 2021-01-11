import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@everestwholesale.com",
    phoneNumber: "318472658",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "jone@everestwholesale.com",
    phoneNumber: "318472638",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@everestwholesale.com",
    phoneNumber: "318472958",
    password: bcrypt.hashSync("123456", 10),
  },
];
export default users;
