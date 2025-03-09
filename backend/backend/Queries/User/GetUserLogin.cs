using AutoMapper;
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
            public string Token { get; set; }
            public int UserId { get; init; }
            public string Username { get; init; }
            public string RoleId { get; init; }
        }

        internal class QueryHandler : IRequestHandler<Query, Model>
        {
            private readonly IUserRepository _userRepository;
            private readonly ITokenService _tokenService;
            private readonly IEncryptionService _encryptionService;
            private readonly IMapper _mapper;

            public QueryHandler(IUserRepository repository, ITokenService tokenService, IEncryptionService encryptionService, IMapper mapper)
            {
                _userRepository = repository;
                _tokenService = tokenService;
                _encryptionService = encryptionService;
                _mapper = mapper;
            }

            public async Task<Model> Handle(Query request, CancellationToken cancellationToken)
            {
                var user = await _userRepository.GetUser(request.Username) ?? throw new Exception("User.Backend.Error.UserNotFound");
                if (!_encryptionService.Verify(request.Password, user.Password))
                    throw new Exception("User.Backend.Error.PasswordIncorrect");

                var token = _tokenService.CreateToken(user);
                var model = _mapper.Map<Model>(user);
                model.Token = token;

                return model;
            }
        }
    }
}
