namespace backend.Service.Token
{
    public interface ITokenService
    {
        public string CreateToken(Entities.User user);
    }
}
