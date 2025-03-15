using backend.Queries.Auth;
using FluentValidation;

namespace backend.Validators.Auth
{
    public class GetUserLoginValidator : AbstractValidator<GetUserLogin.Query>
    {
        public GetUserLoginValidator()
        {
            RuleFor(x => x.Username).NotEmpty();
            RuleFor(x => x.Password).NotEmpty();
        }
    }
}
