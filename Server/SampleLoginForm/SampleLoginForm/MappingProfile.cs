using AutoMapper;
using DataLayer.DTOs.User;
using Microsoft.AspNetCore.Mvc;

namespace SampleLoginForm;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<UserLoginDto, DataLayer.Entities.User>().ReverseMap();
        CreateMap<UserRegisterDto, DataLayer.Entities.User>().ReverseMap();


    }
}
