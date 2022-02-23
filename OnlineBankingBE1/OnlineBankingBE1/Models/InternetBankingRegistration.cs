using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OnlineBankingBE1.Models
{
    public class InternetBankingRegistration
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int InternetBankingID { get; set; }

        [ForeignKey("AccountNumber")]
        public int AccountNumber { get; set; }

        //[Required(ErrorMessage = "Login Password is required")]
        [DataType(DataType.Password)]
        public string LoginPassword { get; set; }

       // [Required(ErrorMessage = "Confirm Login Password is required")]
        [DataType(DataType.Password)]
        public string ConfirmLoginPassword { get; set; }

        //[Required(ErrorMessage = "Transaction Password is required")]
        //[DataType(DataType.Password)]
        //public string TransactionPassword { get; set; }

        //[Required(ErrorMessage = "Confirm Transaction Password is required")]
        //[DataType(DataType.Password)]
        //public string ConfirmTransactionPassword { get; set; }

        public string Answer { get; set; }
    }
}
