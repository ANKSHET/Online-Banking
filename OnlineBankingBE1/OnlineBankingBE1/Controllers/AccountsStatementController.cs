using Microsoft.AspNetCore.Mvc;
using OnlineBankingBE1.Models;
using OnlineBankingBE1.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBankingBE1.Controllers
{
    [Route("api/AccountStatement")]
    [ApiController]
    public class AccountsStatementController : Controller
    {
        private readonly IDataRepository<AccountStatement> _context;

        public AccountsStatementController(IDataRepository<AccountStatement> context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            IEnumerable<AccountStatement> customers = _context.GetAll();
            return Ok(customers);
        }

        //[HttpGet("{id}")]
        //public IActionResult Get(int id)
        //{
        //    AccountStatement customers = _context.Get(id);
        //    return Ok(customers);
        //}

        [HttpGet("{accnum}")]
        public IActionResult Get(int accnum)
        {
            AccountStatement customers = _context.Get(accnum);
            return Ok(customers);
        }


        [HttpPost]
        public IActionResult Post(AccountStatement customer)
        {
            if (customer == null)
            {
                return BadRequest("customer is null.");
            }

            _context.Add(customer);
            //return NoContent();
            return Ok(customer);
        }



        // PUT: api/customer/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, AccountStatement customer)
        {
            AccountStatement customerToUpdate = _context.Get(id);
            if (customerToUpdate == null)
            {
                return NotFound("The customer record couldn't be found.");
            }

            _context.Update(customerToUpdate, customer);
            return Ok(customerToUpdate);
            //return NoContent();
        }

        // DELETE: api/customer/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            AccountStatement customer = _context.Get(id);
            if (customer == null)
            {
                return NotFound("The customer record couldn't be found.");
            }

            _context.Delete(customer.AccountStatId);
            return NoContent();
        }
    }
}
