using OnlineBankingBE1.Models;
using OnlineBankingBE1.OnlineBankingContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBankingBE1.Repository
{
    public class ForgotPasswordRepository :IDataAdmin<InternetBankingRegistration>
    {
        private readonly OnlineBankingDB _IBRTrackingDBContext;

        public ForgotPasswordRepository(OnlineBankingDB EmpDBContext)
        {
            _IBRTrackingDBContext = EmpDBContext;
        }

        public void Add(InternetBankingRegistration entity)
        {
            throw new NotImplementedException();
        }

        public InternetBankingRegistration ValidateAdmin(InternetBankingRegistration entity)
        {
            var CurrAdmin = _IBRTrackingDBContext.internetBankingRegistrations.FirstOrDefault
                (
                  Admin => Admin.AccountNumber == entity.AccountNumber
                  && Admin.Answer == entity.Answer);

            return CurrAdmin;
        }
    }
}
