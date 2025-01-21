using Dinet.Api.Aplicacion.Interfaces;
using Dinet.Api.Aplicacion.Servicios;
using Dinet.Api.Dominio.Interfaces;
using Dinet.Api.Infraestructura.Context;
using Dinet.Api.Infraestructura.Repositorios;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

//Obteneniendo la conexion a la bd para el DbContext de Entity Framework
builder.Services.AddDbContext<AppDbContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("sqlConnection")));

//Configurando la inyeccion de dependencias de para el uso de las interfaces
builder.Services.AddScoped<IProductoRepository, ProductoRepository>();
builder.Services.AddScoped<IProductoService, ProductoService>();


var corsConfig = "_corsConfig";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: corsConfig,
        policy =>
        {
            policy.WithOrigins("http://localhost:4200")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
app.UseCors(corsConfig);
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
