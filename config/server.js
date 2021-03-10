const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');



app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());

app.use('/users', require("../paths/users"));
app.use('/products', require("../paths/products"));
app.use('/orders', require("../paths/orders"));


app.listen(app.get('port'), () => {
        console.log("Servidor iniciado...");
});



