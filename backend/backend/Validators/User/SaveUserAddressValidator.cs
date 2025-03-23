using backend.Queries.User;
using FluentValidation;

namespace backend.Validators.User
{
    public class SaveUserAddressValidator : AbstractValidator<SaveUserAddress.Query>
    { 
        public SaveUserAddressValidator() 
        { 
            RuleFor(x => x.CityId)
                .NotEmpty();
            RuleFor(x => x.CountryId)
                .NotEmpty();
        }
    }
}
