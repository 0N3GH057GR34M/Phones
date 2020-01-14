using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Test.Other
{
  public class BasketPhone
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public int UserId { get; set; }

    public BasketPhone(int id, string name, int userid)
    {
      Id = id;
      Name = name;
      UserId = userid;
    }
  }
}
