namespace backend.Entities
{
    public class User
    {
        public int Id { get; init; }
        public string Username { get; init; }
        public string Email { get; init; }
        public string Password { get; init; }
        public string FirstName { get; init; }
        public string LastName { get; init; }
        public string PhoneNumber { get; init; }
        public int Age { get; init; }
        public int AddressId { get; init; }
        public int RoleId { get; init; }
        public Address Address { get; init; }
        public Role Role { get; init; }
    }
}
