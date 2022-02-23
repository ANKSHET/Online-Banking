using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineBankingBE1.Models;
using OnlineBankingBE1.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBankingBE1.Controllers
{
    [Route("api/Admin")]
    [ApiController]
    public class AdminController : Controller
    {

        private readonly IDataAdmin<AdminLogin> _context;

        public AdminController(IDataAdmin<AdminLogin> context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult VerifyAdmin(AdminLogin model)
        {
            var currentAdmin = _context.ValidateAdmin(model);
            if (currentAdmin == null)
                return NotFound("User Not Found");
            return Ok(currentAdmin);

        }

    }
}
