import routes from "../routes/indexVersion";
import * as express from 'express';
import * as cors from 'cors';
import bodyParser = require("body-parser");

console.log(`\n#-#-#-#-#-#-# ProofMe.ID Scraper Backend #-#-#-#-#-#-# \n`);

const app = express();
const port = parseInt(process.env.PORT || '4006');
app.use(cors({credentials: false, origin: true}));
app.use(bodyParser.json());
app.use("/", routes);
app.listen(port, "0.0.0.0", () => {
    console.log(`#-#-#-#-#-#-# ProofMe.ID Scraper Backend #-#-#-#-#-#-# is running on port ${port}`);
});


