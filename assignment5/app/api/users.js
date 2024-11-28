/*
Name: Demilson Moreira Bose Junior
Student ID: 200548728
Email: 200548728@student.georgianc.on.ca
*/

import User from '../../models/User';
import initDB from '../../lib/initDB';

export default async function handler(req, res) {
  await initDB();

  switch (req.method) {
    case 'GET':
      const users = await User.findAll();
      res.status(200).json(users);
      break;

    case 'POST':
      const { name, email } = req.body;
      const newUser = await User.create({ name, email });
      res.status(201).json(newUser);
      break;

    case 'PUT':
      const { id, updateData } = req.body;
      await User.update(updateData, { where: { id } });
      res.status(200).json({ message: 'User updated' });
      break;

    case 'DELETE':
      const { deleteId } = req.body;
      await User.destroy({ where: { id: deleteId } });
      res.status(200).json({ message: 'User deleted' });
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}