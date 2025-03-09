using backend.Service.Token;
using Microsoft.EntityFrameworkCore;
using E = backend.Entities;

namespace backend.Repository.User
{
    public class UserRepository : IUserRepository
    {
        private readonly AppDbContext _dbContext;

        public UserRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Task<E.User> GetUser(string username)
        {
            var user = _dbContext.Users.FirstOrDefaultAsync(u => u.Username == username);
            return user;
        }

    }
}
