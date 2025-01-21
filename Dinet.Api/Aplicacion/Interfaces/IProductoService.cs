using Dinet.Api.Aplicacion.Dtos;
using Dinet.Api.Dominio.Entidades;

namespace Dinet.Api.Aplicacion.Interfaces
{
    public interface IProductoService
    {
        Task<IEnumerable<Producto>> Consultar(ProductoBuscarDto productoFiltro);
        Task Insertar(ProductoDto producto);
    }
}
