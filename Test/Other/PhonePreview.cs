using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Test.Models;

namespace Test.Other
{
  public class PhonePreview
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public bool IsAdded { get; set; }

    public PhonePreview(int id, string name)
    {
      Id = id;
      Name = name;
      IsAdded = false;
    }
  }
}
