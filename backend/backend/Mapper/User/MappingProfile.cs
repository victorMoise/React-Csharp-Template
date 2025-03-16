using AutoMapper;
using backend.Queries.Auth;
using backend.Queries.User;
using E = backend.Entities;

namespace backend.Mapper.User
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<E.User, GetUserLogin.Model>()
                .ForMember(x => x.UserId, src => src.MapFrom(z => z.Id));

            CreateMap<GetUserRegister.Query, E.User>();
            CreateMap<E.User, GetUserRegister.Model>();
            CreateMap<E.User, GetUserDetails.Query>();

            CreateMap<E.User, GetUserDetails.Model>()
                .ForMember(x => x.Role, src => src.MapFrom(z => z.Role.Name))
                .ForPath(x => x.Address.Details, src => src.MapFrom(x => x.Address.Details))
                .ForPath(x => x.Address.Street, src => src.MapFrom(x => x.Address.Street))
                .ForPath(x => x.Address.City, src => src.MapFrom(z => z.Address.City.Name))
                .ForPath(x => x.Address.Country, src => src.MapFrom(z => z.Address.City.Country.Name));
        }
    }
}
