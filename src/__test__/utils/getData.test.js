import getDate from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Llamar a una API y retornar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
  });

  getDate('http://google.com').then(resp => {
    expect(resp.data).toEqual('12345');
  });

  expect(fetch.mock.calls[0][0]).toEqual('http://google.com');
});
