using backend.Requests;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly AppDbContext _context;

    public UsersController(AppDbContext context)
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
    public async Task<IActionResult> Register(UserRegisterRequest userRegisterRequest)
    {
        return null;
    }


    [HttpPost("login")]
    public async Task<IActionResult> Login(UserLoginRequest userLoginrRequest)
    {
        return null;
    }

    [HttpGet("userRole")]
    public async Task<IActionResult> userRole([FromQuery] string username)
    {
        return null;
    }

    [HttpGet("userInfo")]
    [Authorize]
    public async Task<IActionResult> userInfo([FromQuery] string username)
    {
        return null;
    }
}
