import { Phrase } from '../../domain/entity/phrase';

export interface LoadAllPhrasesRepository {
  loadAllPhrases: () => Phrase[];
}
