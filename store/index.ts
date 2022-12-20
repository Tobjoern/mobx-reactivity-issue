import clientDemo, { ClientDemoStore } from './demo';

export type RootStore = {
  demoStore: ClientDemoStore
};

const rootStore: RootStore = {
  demoStore: clientDemo
};

export default rootStore;
