using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly AppDbContext _context;

    public UserController(AppDbContext context)
    {
        _context = context;
    }

    //private string GenerateJwtToken(User user)
    //{
    //    var tokenHandler = new JwtSecurityTokenHandler();
    //    var key = Encoding.ASCII.GetBytes("jAzfOFc7J4XvsNnt5+X3U9VOHNYaZz7QvvgJcMFg+aU=");
    //    var tokenDescriptor = new SecurityTokenDescriptor
    //    {
    //        Subject = new ClaimsIdentity(new[] { new Claim(ClaimTypes.Name, user.Username) }),
    //        Expires = DateTime.UtcNow.AddHours(1),
    //        SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
    //    };
    //    var token = tokenHandler.CreateToken(tokenDescriptor);
    //    return tokenHandler.WriteToken(token);
    //}

    [HttpPost("register")]
    public async Task<IActionResult> Register()
    {
        throw new NotImplementedException();
    }


    [HttpPost("login")]
    public async Task<IActionResult> Login()
    {
        throw new NotImplementedException();
    }
}
