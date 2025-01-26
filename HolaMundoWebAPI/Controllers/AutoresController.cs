using HolaMundoWebAPI.Datos;
using HolaMundoWebAPI.Entidades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HolaMundoWebAPI.Controllers
{
    [ApiController]
    [Route("api/autores")]
    public class AutoresController: ControllerBase
    {   
        private readonly ApplicationDbContext context;
        // Inyección de dependencias para poder acceder a la base de datos
        public AutoresController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Autor>> Get()
        {
            return await context.Autores.ToListAsync();
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Autor>> Get(int id)
        {
            var autor = await context.Autores.FirstOrDefaultAsync(x => x.Id == id);
            if (autor == null)
            {
                return NotFound();
            }
            return autor;
        }

        [HttpPost]
        public async Task<ActionResult> Post(Autor autor)
        {
            context.Add(autor);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(Autor autor, int id)
        {
            if (autor.Id != id)
            {
                return BadRequest("Los IDs no coinciden");
            }
            context.Update(autor);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var registrosEliminados = await context.Autores.Where(x => x.Id == id).ExecuteDeleteAsync();
            if (registrosEliminados == 0)
            {
                return NotFound();
            }
            return Ok();
        }

    }
}
