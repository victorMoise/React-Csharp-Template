using AutoMapper;
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
        }
    }
}
