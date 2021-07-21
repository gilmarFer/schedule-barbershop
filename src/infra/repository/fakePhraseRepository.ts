import { LoadAllPhrasesRepository } from '../../data/contracts/LoadAllPhrases';
import { Phrase } from '../../domain/entity/phrase';
import { phrases } from '../data-sources/phrases';

export class FakePhrasesRepository implements LoadAllPhrasesRepository {
  loadAllPhrases(): Phrase[] {
    return phrases.map((item, index) => ({
      id: index,
      phrase: item.phrase,
      category: item.category,
    }));
  }
}
