/**
 * express를 사용하여 health check endpoint를 추가하고 3000 포트에서 서버를 실행한다.
 */
import express from 'express';

const app = express();

app.get('/health', (req, res) => {
  res.send('ok');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});