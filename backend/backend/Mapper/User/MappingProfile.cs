using AutoMapper;
using backend.Queries.Auth;
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
        }
    }
}
