
const obtenerChiste = require("./library");



obtenerChiste().then((chiste)=>{
    let chisteExtraido = chiste[0];
    console.log(chisteExtraido.setup);
    console.log(chisteExtraido.punchline);
}).catch((err)=>{
    console.log('error');
});