import { Collection, MongoClient } from 'mongodb';

export const MongoHelper = {
  client: null as unknown as MongoClient,
  url: null as unknown as string,

  async connect(url: string): Promise<void> {
    this.url = url;
    this.client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  },

  async disconnect(): Promise<void> {
    const close = await this.client.close();
    return close;
  },

  async getCollection(name: string): Promise<Collection> {
    if (!this.client?.isConnected()) {
      await this.connect(this.url);
    }
    return this.client.db().collection(name);
  },

  fixIdUnity(data: any): any {
    const { _id, ...rest } = data;
    return Object.assign({}, { id: _id }, rest);
  },

  fixIdList(data: any): any {
    const dataLinst = [];
    for (const body of data) {
      const { _id, ...rest } = body;
      dataLinst.push(Object.assign({}, { id: _id }, rest));
    }
    return dataLinst;
  },
};
