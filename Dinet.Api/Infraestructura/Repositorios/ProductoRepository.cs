using Dinet.Api.Dominio.Entidades;
using Dinet.Api.Dominio.Interfaces;
using Dinet.Api.Infraestructura.Context;
using Microsoft.EntityFrameworkCore;

namespace Dinet.Api.Infraestructura.Repositorios
{
    public class ProductoRepository : IProductoRepository
    {
        private readonly AppDbContext _appDbContext;

        public ProductoRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<IEnumerable<Producto>> Consultar(Producto producto)
        {   
            var query = _appDbContext.Productos.AsQueryable();

            if (producto.Id != 0) { 
                query = query.Where(p => p.Id == producto.Id);
            }

            if (!string.IsNullOrEmpty(producto.Nombre))
            {
                query = query.Where(p => p.Nombre.Contains(producto.Nombre));
            }


            return await query.ToListAsync();
        }

        public async Task Insertar(Producto producto)
        {
           await _appDbContext.Productos.AddAsync(producto);
           await _appDbContext.SaveChangesAsync();
        }
    }
}
