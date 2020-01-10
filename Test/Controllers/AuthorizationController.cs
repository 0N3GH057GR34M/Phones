using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Test.Context;
using Test.Models;

namespace Test.Controllers
{
  public class AuthorizationController : Controller
  {
    private readonly DataContext _data;
    public AuthorizationController(DataContext context)
    {
      _data = context;
    }
    public async Task<IActionResult> Authorizing(string login, string password)
    {
      var user = _data.Users.Where(option => option.Login == login && option.Password == password).FirstOrDefault();
      if (user != null)
      {
        await Authorization(user.Login);
        return Ok();
      }
      else
      {
        return BadRequest();
      }
    }
    private async Task Authorization(string userName)
    {
      var claims = new List<Claim> { new Claim(ClaimsIdentity.DefaultNameClaimType, userName) };
      ClaimsIdentity id = new ClaimsIdentity(claims, "ApplicationCookie", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);
      await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(id));
    }
    private async Task Logout()
    {
      await HttpContext.SignOutAsync();
    }
    public async Task<IActionResult> Logouting()
    {
      await Logout();
      return Ok();
    }
    public IActionResult UserChecking()
    {
      if (User.Identity.Name != null)
      {
        return Ok();
      }
      else
      {
        return BadRequest();
      }
    }
    public IActionResult Registring(string login, string password)
    {
      _data.Users.Add(new User() { Login = login, Password = password });
      _data.SaveChanges();
      return Ok();
    }
  }
}