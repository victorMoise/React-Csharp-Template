using backend.Queries.User;
using backend.Repository.User;
using backend.Service.Token;
using FluentValidation;

namespace backend.Validators.User
{
    public class SaveUserValidator : AbstractValidator<SaveUser.Query>
    {
        private readonly IUserRepository _userRepository;
        private readonly ITokenService _tokenService;

        private readonly int MIN_USERNAME_LENGTH = 3;
        private readonly int MAX_USERNAME_LENGTH = 255;

        public SaveUserValidator(IUserRepository userRepository)
        {
            _userRepository = userRepository;

            RuleFor(x => x.Username)
                .NotEmpty()
                .MinimumLength(MIN_USERNAME_LENGTH)
                .MaximumLength(MAX_USERNAME_LENGTH);

            RuleFor(x => x.Email)
                .NotEmpty()
                .EmailAddress();
        }
    }
}
