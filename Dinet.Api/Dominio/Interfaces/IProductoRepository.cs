using Dinet.Api.Dominio.Entidades;

namespace Dinet.Api.Dominio.Interfaces
{
    public interface IProductoRepository
    {
        Task<IEnumerable<Producto>> Consultar(Producto producto);
        Task Insertar(Producto producto);
    }
}
