# API Crud con Node.js , Express, Sequelize y MySql 

> Desarrollado por Nahuel Murillo

Colección en carpeta ScriptDB:
- para poder importar la bb.dd de MySql.
- script de Insert en la bb.dd.
- script para generar la Vista de MySql.

## Endpoints desarrollados

### Endpoints Catálogo Completo desde Vista MySql

| PETICIÓN | URL | DESCRIPCION |
|:--------:|:---:|:-----------:|
|GET|/|Inicio|
|GET|/api/catalogo|Listar Catálogo Completo|
|GET|/api/catalogo/:id|obtener un catalogo por su ID|
|GET|/api/catalogo/titulo/:query|Filtrar por nombre o parte del nombre del Campo Titulo|
|GET|/api/catalogo/genero/:query|Filtrar por género del catálogo|
|GET|/api/catalogo/categoria/:query|Filtrar por serie - película o cualquier otra categoría|

### Endpoints Categorías

| PETICIÓN | URL | DESCRIPCION |
|:--------:|:---:|:-----------:|
|GET|/api/categorias|Listar todas las categorías|
|GET|/api/categoria/:id|Obtener una categoría por su ID|  
|POST|/api/categoria|Crear una nueva categoría| 
|PUT|/api/categoria/:id|Actualizar una categoría por su ID| 
|DELETE|/api/categoria/:id|Eliminar una categoría por su ID|

### Endpoints Resumenes

| PETICIÓN | URL | DESCRIPCION |
|:--------:|:---:|:-----------:|
|GET|/api/resumenes|Listar todas los resumenes|
|GET|/api/resumen/:id|Obtener un resumen por su ID|  
|POST|/api/resumen|Crear un nuevo resumen| 
|PUT|/api/resumen/:id|Actualizar un resumen por su ID| 
|DELETE|/api/resumen/:id|Eliminar un resumen por su ID|

### Endpoints Catálogos

| PETICIÓN | URL | DESCRIPCION |
|:--------:|:---:|:-----------:|
|GET|/api/catalogos|Listar todos los catálogos|
|GET|/api/catalogos/catalogo/:id|Obtener un Catálogo por su ID|  
|POST|/api/catalogos/catalogo|Crear un nuevo Catálogo| 
|PUT|/api/catalogos/catalogo/:id|Actualizar un Catálogo por su ID| 
|DELETE|/api/catalogos/catalogo/:id|Eliminar un Catálogo por su ID|

### Endpoints Géneros

| PETICIÓN | URL | DESCRIPCION |
|:--------:|:---:|:-----------:|
|GET|/api/generos|Listar todos los géneros|
|GET|/api/genero/:id|Obtener un Genero por su ID|  
|POST|/api/genero|Crear un nuevo Genero| 
|PUT|/api/genero/:id|Actualizar un Genero por su ID| 
|DELETE|/api/genero/:id|Eliminar un Genero por su ID|

### Endpoints catalogosgeneros

| PETICIÓN | URL | DESCRIPCION |
|:--------:|:---:|:-----------:|
|GET|/api/catalogosGeneros|Listar todos los catalogoGenero|
|GET|/api/catalogoGenero/:id|Obtener un catalogoGenero por su ID|  
|POST|/api/catalogoGenero|Crear un nuevo catalogoGenero| 
|PUT|/api/catalogoGenero/:id|Actualizar un catalogoGeneropor su ID| 
|DELETE|/api/catalogoGenero/:id|Eliminar un catalogoGeneropor su ID|

### Endpoints Repartos

| PETICIÓN | URL | DESCRIPCION |
|:--------:|:---:|:-----------:|
|GET|/api/repartos|Listar todos los repartos|
|GET|/api/reparto/:id|Obtener un reparto por su ID|  
|POST|/api/reparto|Crear un nuevo reparto| 
|PUT|/api/reparto/:id|Actualizar un reparto por su ID| 
|DELETE|/api/reparto/:id|Eliminar un reparto por su ID|

### Endpoints catalogosrepartos

| PETICIÓN | URL | DESCRIPCION |
|:--------:|:---:|:-----------:|
|GET|/api/catalogosRepartos|Listar todos los catalogosRepartos|
|GET|/api/catalogoReparto/:id|Obtener un catalogoReparto por su ID|  
|POST|/api/catalogoReparto|Crear un nuevo catalogoReparto| 
|PUT|/api/catalogoReparto/:id|Actualizar un catalogoRepartopor su ID| 
|DELETE|/api/catalogoReparto/:id|Eliminar un catalogoReparto por su ID|

#### A tener en cuenta...
- npm i : para instalar las dependencias. 
- .env  : crear archivo .env y dentro de este las variables : 
 ```plaintext
PORT= 3000
DB_SCHEMA= mi_basededatos (en este caso 'trailerflix') 
DB_USER= mi_usuario(root)
DB_PASSWORD= (password si corresponde)
DB_HOST= 'localhost'
```
- npm start : para iniciar servidor.

##### Muchas Gracias, Nahuel Murillo
