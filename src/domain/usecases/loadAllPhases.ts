import { Phrase } from '../entity/phrase';

export interface LoadAllPhrases {
  load: () => Phrase[];
}
