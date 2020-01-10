using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Test.Other
{
  public class BasketPhone
  {
    public int Id { get; set; }
    public int UserId { get; set; }

    public BasketPhone(int id, int userid)
    {
      Id = id;
      UserId = userid;
    }
  }
}
