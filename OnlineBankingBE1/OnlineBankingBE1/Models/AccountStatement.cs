using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBankingBE1.Models
{
    public class AccountStatement
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int AccountStatId { get; set; }

        [ForeignKey("AccountNumber")]
        public int AccountNumber { get; set; }

        [Required(ErrorMessage = "Account Type is required.")]
        public string AccountType { get; set; }

        [Required(ErrorMessage = "Balance is required.")]
        public double Balance { get; set; }
    }
}
