const Catalogo = require('../models/Catalogos');
const Categoria = require('../models/Categorias');
const Resumen = require('../models/Resumenes');
const Catalogogenero = require('../models/Catalogosgeneros');
const Genero = require('../models/Generos');
const Catalogoreparto = require('../models/Catalogosrepartos');
const Reparto = require('../models/Repartos');


// configurando relaciones
Categoria.hasMany(Catalogo, { foreignKey: 'categoria_id' });
Catalogo.belongsTo(Categoria, { foreignKey: 'categoria_id' });

Resumen.hasMany(Catalogo, { foreignKey: 'resumen_id' });
Catalogo.belongsTo(Resumen, { foreignKey: 'resumen_id' });

// Configurar relación muchos a muchos entre Catalogo y Genero a través de Catalogogenero
Catalogo.belongsToMany(Genero, { through: Catalogogenero, foreignKey: 'catalogo_id' });
Genero.belongsToMany(Catalogo, { through: Catalogogenero, foreignKey: 'genero_id' });

// Configurar relación muchos a muchos entre Catalogo y Reparto a través de Catalogoreparto
Catalogo.belongsToMany(Reparto, { through: Catalogoreparto, foreignKey: 'catalogo_id' });
Reparto.belongsToMany(Catalogo, { through: Catalogoreparto, foreignKey: 'reparto_id' });

module.exports = {
    Categoria,
    Resumen,
    Catalogo,
    Genero,
    Catalogogenero,
    Reparto,
    Catalogoreparto
};