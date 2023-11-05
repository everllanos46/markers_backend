import Response from "../utils/response.js";

let _projectService = null;

export default class ProjectController {
  constructor({ ProjectService }) {
    _projectService = ProjectService;
  }

  async get({ }, res) {
    try {
      const projects = await _projectService.get();
      return res.status(200).send(new Response(200, "", projects));
    } catch (error) {
      return res.status(409).send(new Response(409, "Error", error));
    }
  }

  async getYear(req, res) {
    try {
      const { year} = req.body;
      const projects = await _projectService.getByYear(year);
      return res.status(200).send(new Response(200, "", projects));
    } catch (error) {
      return res.status(409).send(new Response(409, "Error", error));
    }
  }

  async add(req, res) {
    try {
      const { nombre_proyecto, descripcion, fecha, price, marker } = req.body;

      const user = await _projectService.add({ nombre_proyecto: nombre_proyecto, descripcion: descripcion, date: fecha, price: price, marker: marker, id_user: req.userId });
      if (user) return res.status(200).send(new Response(200, "Proyecto creado", user));
      else return res.status(400).json({ message: 'Verifique la información' });

    } catch (error) {
      return res.status(400).json({ message: 'Error al crear el usuario' });
    }
  }

  async update(req, res) {
    try {
      const { nombre_proyecto, descripcion, date, price, marker,id } = req.body;

      const user = await _projectService.update({ nombre_proyecto: nombre_proyecto, descripcion: descripcion, date: date, price: price, marker: marker, id:id  });
      if (user) return res.status(200).send(new Response(200, "Proyecto Actualizado", user));
      else return res.status(400).json({ message: 'Verifique la información' });

    } catch (error) {
      return res.status(400).json({ message: 'Error al crear el usuario' });
    }
  }

}
