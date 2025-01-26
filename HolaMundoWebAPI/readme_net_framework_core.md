**MINIMAL API**
Es cuando no hay controladores, pero es muy limitado.

**ENTITY FRAMEWORK CORE**
Necesario instalar (desde Nuget):
    - Microsoft.EntityFrameworkCore
    - Microsoft.EntityFrameworkCore.SqlServer
    - Microsoft.EntityFrameworkCore.Tools
    - Microsoft.EntityFrameworkCore.Design

Los enfoques que mencionas tienen nombres específicos en el contexto de Entity Framework Core:

1. **Código Primero (Code-First)**

   **Descripción:**
   - En este enfoque, primero defines las clases y el modelo en tu código.
   - Luego, Entity Framework Core genera la base de datos a partir de estas definiciones.

   **Cómo funciona:**
   - Creas clases que representan las tablas (entidades).
   - Configuras las relaciones y restricciones usando atributos o la API Fluent.
   - Generas la base de datos ejecutando migraciones (comandos como `Add-Migration` y `Update-Database`).

   **Ventajas:**
   - Total control sobre el diseño del modelo desde el código.
   - Fácil de versionar y mantener en control de versiones (como Git).
   - Ideal para proyectos nuevos donde no existe una base de datos previa.

   **Ejemplo:**
   ```csharp
   public class Autor
   {
       public int Id { get; set; }
       public string Nombre { get; set; }
   }
    ```
   Luego:
   Si usas el dotnet CLI:
    ``dotnet ef migrations add TablaAutores``

   Si usas el package Manager Console: 
   ``Add-Migration TablaAutores``
   Nt: con el comando se crea una clase que básicamente muestra lo que se va a crear en la BD.
   Comando: ``Update-Database``
   Nt: Utiliza el conecctionString para verificar si ya existe una BD en el servidor, si no existe lo crea y si existe pasa a actualizarlo. (Revisar y verificar si se creó la BD).

2. **Base de Datos Primero (Database-First)**
  **Descripción:**
    - En este enfoque, primero creas la base de datos manualmente o mediante un diseñador de bases de datos.
    - Luego, Entity Framework Core genera el código del modelo (clases y contexto) basado en la estructura existente de la base de datos.
    **Cómo funciona:**
    - La base de datos ya está creada.
    - Usas el comando dotnet ef dbcontext scaffold para generar las clases de las entidades y el contexto automáticamente.
    **Ventajas:**
    - Útil si ya tienes una base de datos existente.
    - Rápido para empezar si la base de datos está bien diseñada.
    **Ejemplo:**
    ``dotnet ef dbcontext scaffold "cadena_de_conexión" Microsoft.EntityFrameworkCore.SqlServer
``

**COMPARACIÓN**
| Característica | Code-First | Database-First |
|-----------|-----------|-----------|
| Control inicial   | En el código    | En la base de datos    |
| Generación automática    | Base de datos   | Código de entidades    |
| Migraciones    | Esenciales    | Opcionales    |
| Adecuado para...    | Proyectos nuevos    | Bases de datos existentes    |


