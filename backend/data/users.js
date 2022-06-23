import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Justas',
    email: 'justas@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jonas',
    email: 'jonas@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
