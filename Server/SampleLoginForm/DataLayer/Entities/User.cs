using System.ComponentModel.DataAnnotations;

namespace DataLayer.Entities;

public class User
{
    [Key]
    public int Id { get; set; }

    [Required]
    [MaxLength(255)]
    public string Username { get; set; }
    [Required]
    public string Password { get; set; }
    public string? Email { get; set; }
}
