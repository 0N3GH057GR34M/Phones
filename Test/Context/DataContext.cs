using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Test.Models;

namespace Test.Context
{
  public class DataContext: DbContext
  {
    public DbSet<User> Users { get; set; }
    public DbSet<Phone> Phones { get; set; }
    public DbSet<Basket> Baskets { get; set; }
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
      Database.EnsureCreated();
    }
  }
}
