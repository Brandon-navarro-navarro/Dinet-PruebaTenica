using Dinet.Api.Dominio.Entidades;
using Microsoft.EntityFrameworkCore;

namespace Dinet.Api.Infraestructura.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        
        public DbSet<Producto> Productos { get; set; }
    }
}
