using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OnlineBankingBE1.Models;
using OnlineBankingBE1.Repository;

namespace OnlineBankingBE1.Controllers
{

    [Route("api/IBRegistration")]
    [ApiController]
    public class IBRegistrationController : Controller
    {
        private readonly IDataRepository<InternetBankingRegistration> _context;

        public IBRegistrationController(IDataRepository<InternetBankingRegistration> context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            IEnumerable<InternetBankingRegistration> customers = _context.GetAll();
            return Ok(customers);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            IEnumerable<InternetBankingRegistration> customers = _context.GetByAccount(id);
            return Ok(customers);
        }
        


        [HttpPost]
        public IActionResult Post(InternetBankingRegistration customer)
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
        public IActionResult Put(int id,InternetBankingRegistration customer)
        {
            InternetBankingRegistration customerToUpdate = _context.Get(id);
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
            InternetBankingRegistration customer = _context.Get(id);
            if (customer == null)
            {
                return NotFound("The customer record couldn't be found.");
            }

            _context.Delete(customer.InternetBankingID);
            return NoContent();
        }
    }
}
