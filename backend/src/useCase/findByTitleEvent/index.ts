import { FindByTitleEventUseCase } from "./findByTitleEventUseCase";
import { FindByTitleEventController } from "./findByTitleEventController";
import { EventRepository } from "../../repositories/implementations/EventRepository";


const eventRepository = new EventRepository();
const findByTileEventUseCase = new FindByTitleEventUseCase(eventRepository);
const findByTitleEventController = new FindByTitleEventController(findByTileEventUseCase);

export {findByTileEventUseCase,findByTitleEventController};