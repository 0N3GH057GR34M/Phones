using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Test.Other
{
  public class PhoneInfo
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public double Price { get; set; }
    public string Description { get; set; }
    public int Number { get; set; }

    public PhoneInfo(int id, string name, double price, string description, int number)
    {
      Id = id;
      Name = name;
      Price = price;
      Description = description;
      Number = number;
    }
  }
}
