using backend.Queries.User;
using FluentValidation;

namespace backend.Validators.User
{
    public class SaveUserValidator : AbstractValidator<SaveUser.Query>
    {
        private readonly int MIN_USERNAME_LENGTH = 3;
        private readonly int MAX_USERNAME_LENGTH = 255;

        public SaveUserValidator()
        {
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
