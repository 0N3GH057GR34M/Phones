using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;
using Test.Context;
using Test.Models;
using Test.Other;

namespace Test.Controllers
{
  public class StoreController : Controller
  {
    private readonly DataContext _data;
    public StoreController(DataContext context)
    {
      _data = context;
    }   
    public List<PhonePreview> GetPhones()
    {
      try
      {
        var user = _data.Users.Where(option => option.Login == User.Identity.Name).FirstOrDefault();
        var phoneswithmarks = new List<PhonePreview>();
        var storephones = _data.Phones.ToList();
        var addedphones = new List<Phone>();
        foreach (var basket in _data.Baskets.ToList())
        {
          if (basket.UserId == user.Id)
          {
            addedphones.Add(_data.Phones.Where(options => options.Id == basket.PhoneId).FirstOrDefault());
          }
        }
        for (int i = 0; i < storephones.Count; i++)
        {
          phoneswithmarks.Add(new PhonePreview(storephones[i].Id, storephones[i].Name));
        }
        foreach (var pwm in phoneswithmarks)
        {
          foreach (var ap in addedphones)
          {
            if (pwm.Id == ap.Id)
            {
              pwm.IsAdded = true;
            }
          }
        }
        return phoneswithmarks;
      }
      catch
      {
        return _data.Phones.Select(option => new PhonePreview(option.Id, option.Name)).ToList();
      }
    }
    public List<BasketPhone> GetBasket()
    { 
      var user = _data.Users.Where(option => option.Login == User.Identity.Name).FirstOrDefault();
      return _data.Baskets.Where(option => option.UserId == user.Id).Select(option => new BasketPhone(option.Id, option.UserId)).ToList();
    }
    public List<PhoneUser> GetUsers()
    {
      return _data.Users.Select(option => new PhoneUser(option.Id)).ToList();
    }
    public IActionResult AddToBasket(string id)
    {
      try
      {
        var user = _data.Users.Where(option => option.Login == User.Identity.Name).FirstOrDefault();
        _data.Baskets.Add(new Basket { UserId = user.Id, PhoneId = int.Parse(id) });
        _data.SaveChanges();
        return Ok();
      }
      catch
      {
        return BadRequest();
      }
    }
    public IActionResult RemoveToBasket(string id)
    {
      try
      {
        var user = _data.Users.Where(option => option.Login == User.Identity.Name).FirstOrDefault();
        var item = _data.Baskets.Where(option => option.PhoneId == int.Parse(id) && option.UserId == user.Id).FirstOrDefault();
        _data.Baskets.Remove(item);
        _data.SaveChanges();
        return Ok();
      }
      catch
      {
        return BadRequest();
      }
    }
    public PhoneInfo GetPhoneDescription(int id)
    {
      return _data.Phones.Where(option => option.Id == id).Select(option => new PhoneInfo(option.Id, option.Name, option.Price, option.Description, option.Number)).ToList().FirstOrDefault();
    }
  }
}