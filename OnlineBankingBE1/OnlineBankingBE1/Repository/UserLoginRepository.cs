using OnlineBankingBE1.Models;
using OnlineBankingBE1.OnlineBankingContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBankingBE1.Repository
{
    public class UserLoginRepository : IDataUser<InternetBankingRegistration>
    {
        private readonly OnlineBankingDB _AdminDBContext;

        public UserLoginRepository(OnlineBankingDB EmpDBContext)
        {
            _AdminDBContext = EmpDBContext;
        }
        public void Add(InternetBankingRegistration entity)
        {
            _AdminDBContext.internetBankingRegistrations.Add(entity);
            _AdminDBContext.SaveChanges();
        }


        public InternetBankingRegistration ValidateAdmin(InternetBankingRegistration entity)
        {
            var CurrAdmin = _AdminDBContext.internetBankingRegistrations.FirstOrDefault
                (
                  Admin => Admin.AccountNumber == entity.AccountNumber
                  && Admin.LoginPassword == entity.LoginPassword);


            return CurrAdmin;
        }
    }
}
