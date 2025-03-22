using backend.Constants;
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

        public Task<E.User?> GetUserByUsername(string username)
        {
            var user = _dbContext.Users.Include(x => x.Role).FirstOrDefaultAsync(u => u.Username == username);
            return user;
        }

        public Task<E.User?> GetUserByEmail(string email)
        {
            var user = _dbContext.Users.Include(x => x.Role).FirstOrDefaultAsync(u => u.Email == email);
            return user;
        }

        public async Task<E.User> SaveUser(E.User user)
        {
            if (user.Id == default)
            {
                user.RoleId = UserRoles.USER;
                _dbContext.Users.Add(user);
            }
            else
                _dbContext.Users.Update(user);

            await _dbContext.SaveChangesAsync();
            return user;
        }

        public Task<E.User?> GetDetailedUser(int userId)
        {
            var user = _dbContext.Users
                .Where(x => x.Id == userId)
                .Include(x => x.Role)
                .Include(x => x.Address)
                    .ThenInclude(x => x.City)
                        .ThenInclude(x => x.Country)
                .FirstOrDefaultAsync();
            return user;
        }

        public Task<List<E.Country>> GetCountries()
        {
            return _dbContext.Countries.ToListAsync();
        }

        public Task<List<E.City>> GetCities(int countryId)
        {
            return _dbContext.Cities.Where(x => x.CountryId == countryId).ToListAsync();
        }
    }
}
