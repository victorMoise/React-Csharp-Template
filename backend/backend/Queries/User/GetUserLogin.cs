using backend.Repository.User;
using backend.Service.Encryption;
using backend.Service.Token;
using MediatR;

namespace backend.Queries.User
{
    public class GetUserLogin 
    {
        public class Query : IRequest<Model>
        {
            public string Username { get; init; }
            public string Password { get; init; }
        }

        public record Model
        {
            public string Token { get; init; }
            public int UserId { get; init; }
            public string Username { get; init; }
        }

        internal class QueryHandler : IRequestHandler<Query, Model>
        {
            private readonly IUserRepository _repository;
            private readonly ITokenService _tokenService;
            private readonly IEncryptionService _encryptionService;

            public QueryHandler(IUserRepository repository, ITokenService tokenService, IEncryptionService encryptionService)
            {
                _repository = repository;
                _tokenService = tokenService;
                _encryptionService = encryptionService;
            }

            public async Task<Model> Handle(Query request, CancellationToken cancellationToken)
            {
                var user = await _repository.GetUser(request.Username) ?? throw new Exception("User.Backend.Error.UserNotFound");
                if (!_encryptionService.Verify(request.Password, user.Password))
                    throw new Exception("User.Backend.Error.PasswordIncorrect");
                var token = _tokenService.CreateToken(user);
                return new Model { Token = token, UserId = user.Id, Username = user.Username };
            }
        }
    }
}
