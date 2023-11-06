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

  async getByYear(yearToFilter) {
    const project = await _projectRepository.get();
    const projectsFilters = project.filter(item=>{
      const date = new Date(item.date);
      const year = date.getFullYear();
      return year === yearToFilter;
    })
    return projectsFilters;
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
