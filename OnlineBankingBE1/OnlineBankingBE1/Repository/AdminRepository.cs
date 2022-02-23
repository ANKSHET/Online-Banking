using OnlineBankingBE1.Models;
using OnlineBankingBE1.OnlineBankingContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBankingBE1.Repository
{
    public class AdminRepository : IDataAdmin<AdminLogin>
    {
        private readonly OnlineBankingDB _AdminDBContext;

        public AdminRepository(OnlineBankingDB EmpDBContext)
        {
            _AdminDBContext = EmpDBContext;
        }
        public void Add(AdminLogin entity)
        {
            _AdminDBContext.adminLogins.Add(entity);
            _AdminDBContext.SaveChanges();
        }


        public AdminLogin ValidateAdmin(AdminLogin entity)
        {
            var CurrAdmin = _AdminDBContext.adminLogins.FirstOrDefault
                (
                  Admin => Admin.AdminEmail == entity.AdminEmail
                  && Admin.Password == entity.Password);


            return CurrAdmin;
        }

    }
}
