using E = backend.Entities;

namespace backend.Repository.User
{
    public interface IUserRepository
    {
        Task<E.User> GetUser(string username);
        Task<E.User> SaveUser(E.User user);
    }
}
