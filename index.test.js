const { bankAccount } = require('./');

describe('Test various cases', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('Create an account', () => {
    const account = bankAccount('Jane', 'Doe');
    expect(account.getAccountName()).toBe('Jane Doe');
  });
  test('Empty balance', () => {
    const account = bankAccount('Jane', 'Doe');
    expect(account.getBalance()).toBe(0);
  });
  test('Add $1000 as credits', () => {
    const account = bankAccount('Jane', 'Doe');
    account.addCredits(1000);
    expect(account.getBalance()).toBe(1000);
  });
  test('Deduct $100 from the balance of $1000 ', () => {
    const account = bankAccount('Jane', 'Doe');
    account.addCredits(1000);
    expect(account.getBalance()).toBe(1000);
    account.deduct(100);
    expect(account.getBalance()).toBe(900);
  });
  test('Deduct $990 from the balance of $1000', () => {
    const account = bankAccount('Jane', 'Doe');
    account.addCredits(1000);
    expect(account.getBalance()).toBe(1000);
    account.deduct(990);
    expect(account.getBalance()).toBe(10);
  });
});
