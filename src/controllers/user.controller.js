import Response from "../utils/response.js";
import jwt from 'jsonwebtoken';

let _userService = null;
const secretKey = process.env.SECRET_KEY;

export default class UserController {
  constructor({ UserService }) {
    _userService = UserService;
  }

  async userById({ params: { id_user }, res }) {
    try {
      const user = await _userService.findUserById(id_user);
      if (user) {
        return res
          .status(200)
          .send(new Response(200, "Actualizado correctamente", user));
      } else {
        return res
          .status(200)
          .send(
            new Response(200, "Error al momento de actualizar", user)
          );
      }
    } catch (err) {
      return res
        .status(409)
        .send(new Response(409, "Error al momento de actualizar", err));
    }
  }

  async get(req, res) {
    try {
      const users = await _userService.get();
      return res.status(200).send(new Response(200, "", users));
    } catch (error) {
      return res.status(409).send(new Response(409, "Error", error));
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;

      const user = await _userService.findUserByUserName(username, password);
      if (user) {
        const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, { expiresIn: '1h' });
        return res.status(200).send(new Response(200, "Inicio correcto", token));
      }
      else return res.status(401).json({ message: 'Credenciales inválidas' });
    } catch (error) {
      res.status(500).json({ message: 'Error al autenticar al usuario' });
    }
  }

  async add(req, res) {
    try {
      const { username, password, email } = req.body;

      const user = await _userService.add({ usern: username, pass: password, email: email });
      if (user) return res.status(200).send(new Response(200, "Usuario creado", user));
      else return res.status(400).json({ message: 'Verifique la información' });

    } catch (error) {
      return res.status(400).json({ message: 'Error al crear el usuario' });
    }
  }

}
