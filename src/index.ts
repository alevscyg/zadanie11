import { useExpressServer } from 'routing-controllers';
import { UserController } from './controller/user.controller';
import express from 'express';

let app = express();
app.use(express.json());
useExpressServer(app, {
  controllers: [UserController], 
});
app.listen(3000); 