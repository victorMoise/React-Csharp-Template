namespace backend.Service.Token
{
    public interface ITokenService
    {
        string CreateToken(Entities.User user);
        string? GetUserId(string token);
        string? GetUsername(string token);
        string? GetEmail(string token);
        string? GetRole(string token);
    }
}
