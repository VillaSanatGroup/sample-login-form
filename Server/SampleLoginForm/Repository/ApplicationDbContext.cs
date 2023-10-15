using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using DataLayer.Entities;


namespace Repository;

public class ApplicationDbContext : DbContext
{
    public DbSet<User> Users { get; set; }

    //protected override void OnConfiguring(DbContextOptionsBuilder options)
    //    => options.UseSqlite("Data Source=app.db");
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
       : base(options)
    {

    }

    public ApplicationDbContext() : base()
    {
    }

}
