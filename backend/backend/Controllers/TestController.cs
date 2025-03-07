using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class TestController : ControllerBase
{
    private readonly AppDbContext _context;

    public TestController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet("connection")]
    public async Task<IActionResult> TestConnection()
    {
        try
        {
            // Simple query to test connection
            var result = await _context.Countries.ToListAsync();
            return Ok(result);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Error connecting to database: {ex.Message}");
        }
    }
}
