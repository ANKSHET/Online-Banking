using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBankingBE1.Models
{
    public class NeftPay
    {
        [Key]
        public int NeftId { get; set; }
        [Required(ErrorMessage = "From Account Number is required")]
        [ForeignKey("AccountNumber")]
        public int FromAccount { get; set; }

        [Required(ErrorMessage = "To Account Number is required")]
        [ForeignKey("AccountNumber")]
        public int ToAccount { get; set; }

        [Required(ErrorMessage = "Amount required")]
        public double Amount { get; set; }

        [Required(ErrorMessage = "Transaction Date is required")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime TransactionDate { get; set; }

        public string Remarks { get; set; }
    }
}
