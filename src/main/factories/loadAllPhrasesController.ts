import { LoadAllPhrasesService } from '../../data/services/loadAllPhrases';
import { FakePhrasesRepository } from '../../infra/repository/fakePhraseRepository';
import { Controller } from '../../presentation/contracts/controller';
import { LoadAllPhrasesController } from '../../presentation/controllers/loadAllPhrases';

export const makeLoadAllPhrasesController = (): Controller => {
  const repo = new FakePhrasesRepository();
  const loader = new LoadAllPhrasesService(repo);
  return new LoadAllPhrasesController(loader);
};
