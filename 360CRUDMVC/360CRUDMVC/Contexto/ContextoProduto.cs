using _360CRUDMVC.Models;
using Microsoft.EntityFrameworkCore;

namespace _360CRUDMVC.Contexto
{
    public class ContextoProduto : DbContext
    {
        public ContextoProduto(DbContextOptions<ContextoProduto> options) : base(options)
        {
            
        }

        public DbSet<Produto> Produtos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Produto>(a =>
            {
                a.HasKey(b => b.Id);
                a.Property(b => b.Nome).IsRequired(true);
                a.Property(b => b.Descricao).HasMaxLength(100)
                .HasColumnType("varchar(100)");

        });

    }

    }
}
