using backend.Entities;
using Microsoft.EntityFrameworkCore;
using System.Globalization;
using System.Reflection;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<User> Users { get; set; }
    public DbSet<Country> Countries { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Apply all configurations from the current assembly
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

        // Apply snake_case naming convention to all entities
        foreach (var entity in modelBuilder.Model.GetEntityTypes())
        {
            foreach (var property in entity.GetProperties())
            {
                // Convert the property name to snake_case
                property.SetColumnName(ToSnakeCase(property.Name));
            }
        }
    }

    // Helper method to convert camelCase or PascalCase to snake_case
    private string ToSnakeCase(string str)
    {
        var startUnderscore = false;
        var snakeCase = new System.Text.StringBuilder();

        foreach (var c in str)
        {
            if (char.IsUpper(c))
            {
                if (!startUnderscore && snakeCase.Length > 0)
                {
                    snakeCase.Append('_');
                }
                snakeCase.Append(char.ToLowerInvariant(c));
            }
            else
            {
                snakeCase.Append(c);
            }
            startUnderscore = false;
        }

        return snakeCase.ToString();
    }
}
