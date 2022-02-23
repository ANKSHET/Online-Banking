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
    [Route("api/SavingsAccount")]
    [ApiController]
    public class SavingsAccountsController : Controller
    {
        private readonly IDataRepository<SavingsAccount> _context;

        public SavingsAccountsController(IDataRepository<SavingsAccount> context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            IEnumerable<SavingsAccount> customers = _context.GetAll();
            return Ok(customers);
        }

        [HttpGet("{accnum}")]
        public IActionResult Get(int accnum)
        {
            SavingsAccount customers = _context.Get(accnum);
            return Ok(customers);
        }

        


        [HttpPost]
        public IActionResult Post(SavingsAccount customer)
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
        public IActionResult Put(int id, SavingsAccount customer)
        {
            SavingsAccount customerToUpdate = _context.Get(id);
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
            SavingsAccount customer = _context.Get(id);
            if (customer == null)
            {
                return NotFound("The customer record couldn't be found.");
            }

            _context.Delete(customer.AccountNumber);
            return NoContent();
        }
       
    }
}
