namespace backend.Service.Token
{
    public interface ITokenService
    {
        string CreateToken(Entities.User user);
    }
}
