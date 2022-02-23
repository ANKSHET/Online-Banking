using Microsoft.AspNetCore.Mvc;
using OnlineBankingBE1.Models;
using OnlineBankingBE1.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBankingBE1.Controllers
{
    [Route("api/ForgotPassword")]
    [ApiController]
    public class ForgotpasswordController : Controller
    {
        private readonly IDataAdmin<InternetBankingRegistration> _context;

        public ForgotpasswordController(IDataAdmin<InternetBankingRegistration> context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult ValidateAnswer(InternetBankingRegistration model)
        {
            var currentAdmin = _context.ValidateAdmin(model);
            if (currentAdmin == null)
                return NotFound("User Not Found");
            return Ok(currentAdmin);

        }
    }
}
