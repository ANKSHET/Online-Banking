using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OnlineBankingBE1.Models
{
    public class UserLogin
    {   [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int AccountKey { get; set; }
        [ForeignKey("AccountNumber")]
        public int AccountNumber { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
