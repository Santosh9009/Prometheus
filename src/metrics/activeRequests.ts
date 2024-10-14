import client from 'prom-client';

export const activeRequestGauge = new client.Gauge({
  name:'active_requests',
  help:'number of active requests'
})