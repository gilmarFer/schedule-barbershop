import { Phrase } from '../../domain/entity/phrase';

export class PhrasesViewModel {
  // id: number;
  // category: string;
  // phrase: string;

  static map(entity: Phrase): PhrasesViewModel {
    return {
      ...entity,
    };
  }

  static mapCollection(entities: Phrase[]): PhrasesViewModel[] {
    return entities.map((entity) => PhrasesViewModel.map(entity));
  }
}
