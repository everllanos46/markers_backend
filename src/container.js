import {
	createContainer,
	asClass,
	asValue,
} from "awilix";


// Services
import UserService from "./services/user.service.js";
import ProjectService from "./services/project.service.js";

// Controllers
import UserController from "./controllers/user.controller.js";
import ProjectController from "./controllers/project.controller.js";

//repository
import UserRepository from "./repositories/user.repository.js";
import ProjectRepository from "./repositories/project.repository.js";

//models
import User from "./db/models/user.model.js";
import Project from "./db/models/project.model.js";
import MarkerRepository from "./repositories/marker.repository.js";
import Marker from "./db/models/marker.model.js";

// Container
const container = createContainer();


container
	.register({
		User: asValue(User),
		Project: asValue(Project),
		Marker: asValue(Marker)
	})
	.register({
		UserService: asClass(UserService).singleton(),
		ProjectService: asClass(ProjectService).singleton(),
	})
	.register({
		UserController: asClass(UserController.bind(UserController)).singleton(),
		ProjectController: asClass(ProjectController.bind(ProjectController)).singleton(),
	})
	.register({
		UserRepository: asClass(UserRepository).singleton(),
		ProjectRepository: asClass(ProjectRepository).singleton(),
		MarkerRepository: asClass(MarkerRepository).singleton(),
	});
export default container;