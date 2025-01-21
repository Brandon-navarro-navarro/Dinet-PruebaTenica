using Dinet.Api.Aplicacion.Dtos;
using Dinet.Api.Aplicacion.Interfaces;
using Dinet.Api.Dominio.Entidades;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Dinet.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductosController : ControllerBase
    {
        private readonly IProductoService _productoService;

        public ProductosController(IProductoService productoService)
        {
            _productoService = productoService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Producto>>> Consultar([FromQuery]ProductoBuscarDto productoFiltro)
        {
            var productos = await _productoService.Consultar(productoFiltro);
            return Ok(productos);
        }

        [HttpPost]
        public async Task<ActionResult> Insertar([FromBody] ProductoDto producto)
        {

            await _productoService.Insertar(producto);
            return Ok(producto);
        }
    }
}
