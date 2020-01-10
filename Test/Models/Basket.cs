using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Test.Models
{
  public class Basket
  {
    public int Id { get; set; }

    public int PhoneId { get; set; }
    public Phone Phone { get; set; }

    public int UserId { get; set; }
    public User User { get; set; }
  }
}
