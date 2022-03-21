import { Amplify, DataStore } from "aws-amplify";
import awsmobile from "../src/aws-exports";
import { MappedTodo } from "../src/models";

Amplify.configure(awsmobile);

let mockData = [
  new MappedTodo({
    name: "jest todo",
    description: "testing datastore with jest",
  }),
];

async function saveMockDeliverables() {
  for (const d of mockData) {
    await DataStore.save(d);
  }
}

describe("DeliverableDetails", () => {
  beforeAll(async () => {
    await saveMockDeliverables();
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  beforeEach(async () => {
    await DataStore.clear();
  });
  it.only("test", async () => {
    return;
  });
});
