using HolaMundoWebAPI.Entidades;
using Microsoft.EntityFrameworkCore;

namespace HolaMundoWebAPI.Datos
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Autor> Autores { get; set; }

        public DbSet<Libro> Libros { get; set; }
    }
}
