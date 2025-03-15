﻿using E = backend.Entities;

namespace backend.Repository.User
{
    public interface IUserRepository
    {
        Task<E.User> GetUserByUsername(string username);
        Task<E.User> GetUserByEmail(string email);
        Task<E.User> SaveUser(E.User user);
    }
}
