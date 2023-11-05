import BaseService from "./base.service.js";

let _projectRepository = null;
let _markerRepository = null;

export default class ProjectService extends BaseService {
  constructor({
    ProjectRepository,
    MarkerRepository
  }) {
    super(
      ProjectRepository,
      MarkerRepository
    );
    _projectRepository = ProjectRepository;
    _markerRepository = MarkerRepository;
  }

  async get() {
    const project = await _projectRepository.get();
    return project;
  }

  async add(projectToAdd) {
    try {
      const marker = await _markerRepository.create(projectToAdd.marker);
      const project = await _projectRepository.create({
        nombre_proyecto: projectToAdd.nombre_proyecto,
        descripcion: projectToAdd.descripcion,
        user_id: projectToAdd.id_user,
        marker_id: marker.id,
        price: projectToAdd.price,
        date: projectToAdd.date
      });
      return project;
    }
    catch (error) {
      console.log(error);
      return null;
    }
  }

  async getByYear(year) {
    const project = await _projectRepository.filterByYear(year);
    return project;
  }

  async filterByYear(projectToAdd) {
    try {
      const marker = await _markerRepository.update({latitude: projectToAdd.marker.latitude, longitude: projectToAdd.marker.longitude},projectToAdd.marker.id );
      const project = await _projectRepository.update({
        nombre_proyecto: projectToAdd.nombre_proyecto,
        descripcion: projectToAdd.descripcion,
        price: projectToAdd.price
      },projectToAdd.id);
      return project;
    }
    catch (error) {
      console.log(error);
      return null;
    }
  }
}
