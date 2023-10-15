using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DataLayer.Entities;
using Repository;
using DataLayer.DTOs.User;
using AutoMapper;

namespace SampleLoginForm.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UsersController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly IMapper _mapper;

    public UsersController(ApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpPost("register")]
    public IActionResult Register(UserRegisterDto userModel)
    {

        var model = _mapper.Map<DataLayer.Entities.User>(userModel);
        var user = _context.Users.SingleOrDefault(u => u.Username == model.Username);

        if (user != null) 
        {
            return BadRequest("user exists");
        }
        _context.Users.Add(model);
        _context.SaveChanges();
        return Ok("User registered successfully.");
    }

    [HttpPost("login")]
    public IActionResult Login(UserLoginDto userModel)
    {
        var loginModel = _mapper.Map<DataLayer.Entities.User>(userModel);
        var user = _context.Users.SingleOrDefault(u => u.Username == loginModel.Username && u.Password == loginModel.Password);

        if (user == null)
        {
            return BadRequest("Invalid username or password");
        }
        return Ok("login");
        
    }
}
