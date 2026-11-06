# District Store - Frontend conectado a api_proyecto

## Qué se modificó
- Se mantuvo el diseño general y las rutas principales del proyecto original.
- Se agregó HttpClient y el interceptor para enviar el token JWT.
- Productos y ofertas consultan la API; ofertas muestra los 6 productos de menor precio.
- Carrito y favoritos consultan y actualizan la API.
- Registro e inicio de sesión usan los endpoints de usuarios.
- Se agregó el resumen de compra, historial, pantalla de ticket y panel de administración protegido.
- Se conservaron los archivos originales de PHP sin modificarlos. Este ZIP contiene solamente el frontend.

## Configuración
1. Colocar la carpeta `api_proyecto` original dentro de `htdocs` de XAMPP.
2. Iniciar Apache y MySQL.
3. La configuración original `config/Bd.php` se conecta a una base llamada `proyecto` (no `tienda`). La base debe existir con las tablas que usa la API original.
4. Ejecutar Angular desde esta carpeta con `npm install` y `npm start`.
5. La API está configurada en los servicios con `http://localhost/api_proyecto/public` y CORS para `http://localhost:4200`.
6. Cargar al menos 9 productos en la tabla `productos`. La pantalla Ofertas toma los 6 más baratos.
7. Las imágenes deben existir en `api_proyecto/public/uploads/` y la columna `imagen` debe guardar el nombre del archivo.

## Limitaciones por mantener la API intacta
- El PDF de la actividad pide que el ticket se genere como PDF. En la API original, `models/Ticket.php` requiere `utils/fpdf/fpdf.php`, pero el ZIP original contiene `utils/fpdf.php` en otra ubicación. Por eso el endpoint de generación del ticket puede fallar hasta corregir esa ruta en el backend. No se modificó porque se indicó expresamente que la API no se toca.
- La API original apunta a la base `proyecto`; no se cambió a `tienda` porque eso requeriría modificar `config/Bd.php`.
- La API no fue probada contra una base MySQL real en este entorno. La compilación de Angular/TypeScript sí se validó con Angular Compiler (`ngc`).
