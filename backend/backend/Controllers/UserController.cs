using backend.Queries.User;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IMediator _mediator;

        public UserController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register()
        {
            throw new NotImplementedException();
        }


        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] GetUserLogin.Query query)
        {
            var result = await _mediator.Send(query);
            return Ok(result);
        }
    }
}


