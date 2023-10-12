import { server } from "./server/index";

server.listen(`${process.env.PORTSERVER}`, () => {
  {console.log(`Server is running for port ${process.env.PORTSERVER}!!!`)}
});