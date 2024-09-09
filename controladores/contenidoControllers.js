
module.exports.identidad = (req, res) => {
  return res.render('Identidad/identidad', {tituloPagina:"-Identidad"});
};
module.exports.MarcoLegal = (req, res) => {
  return res.render('MarcoLegal/MarcoLegal', {tituloPagina:"Prueba"});
};
module.exports.informes = (req, res) => {
  return res.render('Informes/Informes', {tituloPagina:"Prueba"});
};
module.exports.EntidadesFiscalizadas = (req, res) => {
  return res.render('EntidadesFiscalizadas/EntidadesFiscalizadas', {tituloPagina:"Prueba"});
};
module.exports.oic = (req, res) => {
  return res.render('OIC/oic', {tituloPagina:"Prueba"});
};
module.exports.Contacto = (req, res) => {
  return res.render('Contacto/Contacto', {tituloPagina:"Prueba"});
};


/*



*/