using E = backend.Entities;

namespace backend.Repository.User
{
    public interface IUserRepository
    {
        public Task<E.User> GetUser(string username);
    }
}
