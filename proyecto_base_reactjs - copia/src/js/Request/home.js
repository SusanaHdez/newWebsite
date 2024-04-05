
export function getHomeRequest(payload={}) {
  return {
    method: 'get',
    headers: { "content-type": "application/json" },
    url: 'https://private-eaf7a-susana3.apiary-mock.com/homeInfo',
  }
}