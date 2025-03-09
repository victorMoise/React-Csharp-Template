using backend.Repository.User;
using MediatR;

namespace backend.Queries.User
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

            public QueryHandler(IUserRepository repository)
            {
                _userRepository = repository;
            }

            public async Task<Model> Handle(Query request, CancellationToken cancellationToken)
            {


                return new Model();
            }
        }
    }
}
