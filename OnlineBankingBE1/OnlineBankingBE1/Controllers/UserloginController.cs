using Microsoft.AspNetCore.Mvc;
using OnlineBankingBE1.Models;
using OnlineBankingBE1.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBankingBE1.Controllers
{
    [Route("api/Userlogin")]
    [ApiController]
    public class UserloginController : Controller
    {
        private readonly IDataUser<InternetBankingRegistration> _context;

        public UserloginController(IDataUser<InternetBankingRegistration> context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult VerifyAdmin(InternetBankingRegistration model)
        {
            var currentUser = _context.ValidateAdmin(model);
            if (currentUser == null)
                return NotFound("User Not Found");
            return Ok(currentUser);

        }
      
    }
}
