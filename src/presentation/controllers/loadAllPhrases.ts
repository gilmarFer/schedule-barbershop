import { LoadAllPhrases } from '../../domain/usecases/loadAllPhases';
import { Controller } from '../contracts/controller';
import { HttpResponse, ok, serverError } from '../contracts/http';
import { PhrasesViewModel } from '../view-models/PhrasesViewModel';

export class LoadAllPhrasesController implements Controller {
  constructor(private readonly loadAllPhrases: LoadAllPhrases) {}

  handle(): HttpResponse {
    try {
      const phrases = this.loadAllPhrases.load();
      return ok(PhrasesViewModel.mapCollection(phrases));
    } catch (error) {
      return serverError(error);
    }
  }
}
