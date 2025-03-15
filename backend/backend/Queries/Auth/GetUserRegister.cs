using AutoMapper;
using backend.Entities;
using backend.Repository.User;
using MediatR;

namespace backend.Queries.Auth
{
    public class GetUserRegister
    {
        public class Query : IRequest<Model>
        {
            public string Username { get; init; }
            public string Email { get; init; }
            public string Password { get; init; }
        }

        public class Model
        { 
            public string Username { get; init; }
            public string Email { get; init; }
        }

        internal class QueryHandler : IRequestHandler<Query, Model>
        {
            private readonly IUserRepository _userRepository;
            private readonly IMapper _mapper;

            public QueryHandler(IUserRepository repository, IMapper mapper)
            {
                _userRepository = repository;
                _mapper = mapper;
            }

            public async Task<Model> Handle(Query request, CancellationToken cancellationToken)
            {
                var user = _mapper.Map<User>(request);
                var result = await _userRepository.SaveUser(user);
                return _mapper.Map<Model>(result);
            }
        }
    }
}
