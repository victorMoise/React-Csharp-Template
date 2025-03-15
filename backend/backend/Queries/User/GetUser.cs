using backend.Service.Token;
using MediatR;
using Microsoft.AspNetCore.Http;

namespace backend.Queries.User
{
    public class GetUser
    {
        public class Query : IRequest<Model> { }

        public class Model
        {
            public string Username { get; init; }
        }

        internal class QueryHandler : IRequestHandler<Query, Model>
        {
            private readonly ITokenService _tokenService;
            private readonly IHttpContextAccessor _httpContextAccessor;

            public QueryHandler(ITokenService tokenService, IHttpContextAccessor httpContextAccessor)
            {
                _tokenService = tokenService;
                _httpContextAccessor = httpContextAccessor;
            }

            public async Task<Model> Handle(Query request, CancellationToken cancellationToken)
            {
                var token = _httpContextAccessor.HttpContext?.Request.Headers.Authorization.ToString().Replace("Bearer ", "");

                if (string.IsNullOrEmpty(token))
                {
                    throw new UnauthorizedAccessException("Token is missing");
                }

                var username = _tokenService.GetUsername(token);

                return new Model { Username = username };
            }
        }
    }
}
