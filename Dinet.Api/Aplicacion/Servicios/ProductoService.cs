using Dinet.Api.Aplicacion.Dtos;
using Dinet.Api.Aplicacion.Interfaces;
using Dinet.Api.Dominio.Entidades;
using Dinet.Api.Dominio.Interfaces;

namespace Dinet.Api.Aplicacion.Servicios
{
    public class ProductoService : IProductoService
    {
        private readonly IProductoRepository _repository;

        public ProductoService(IProductoRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<Producto>> Consultar(ProductoBuscarDto productoFiltro)
        {
            Producto oProducto = new Producto();
            oProducto.Id = (int)(productoFiltro.id == null ? 0 : productoFiltro.id);
            oProducto.Nombre = productoFiltro.nombre;

            return await _repository.Consultar(oProducto);
        }

        public async Task Insertar(ProductoDto producto)
        {   
            Producto oProducto = new Producto();
            oProducto.Nombre = producto.nombre;
            oProducto.Precio = producto.precio;
            var horaServidor = DateTime.Now;
            oProducto.FechaCreacion = producto.fechaCreacion.Date.Add(horaServidor.TimeOfDay);

            await _repository.Insertar(oProducto);
        }
    }
}
