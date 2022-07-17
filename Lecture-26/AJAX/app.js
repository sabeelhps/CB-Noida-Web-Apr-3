const res = `{"ticker":{"base":"BTC","target":"USD","price":"21451.57086312","volume":"9153.94644227","change":"106.35372801"},"timestamp":1658038144,"success":true,"error":""}`;

const data = JSON.parse(res);

document.write(data.ticker.price);