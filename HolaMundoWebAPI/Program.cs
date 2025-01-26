using HolaMundoWebAPI.Datos;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// área de servicios
builder.Services.AddControllers();

builder.Services.AddDbContext<ApplicationDbContext>(opciones => opciones.UseSqlServer("name=DefaultConnection"));    

var app = builder.Build();

// área de middleware
app.MapControllers();

app.Run();
