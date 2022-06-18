using System;
using Microsoft.EntityFrameworkCore;
using CRUDAPI.Models;

namespace CRUDAPI.Data{ 
    public class Contexto: DbContext{ 
        public DbSet<Pessoa> Pessoas { get; set; }

        public Contexto(DbContextOptions<Contexto> options): base(options) { }
    } 

}