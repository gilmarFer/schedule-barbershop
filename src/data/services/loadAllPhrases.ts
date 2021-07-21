import { Phrase } from '../../domain/entity/phrase';
import { LoadAllPhrases } from '../../domain/usecases/loadAllPhases';
import { LoadAllPhrasesRepository } from '../contracts/LoadAllPhrases';

export class LoadAllPhrasesService implements LoadAllPhrases {
  constructor(
    private readonly loadAllPhrasesRepository: LoadAllPhrasesRepository,
  ) {}

  load(): Phrase[] {
    return this.loadAllPhrasesRepository.loadAllPhrases();
  }
}
