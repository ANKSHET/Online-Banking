using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OnlineBankingBE1.Models;
using OnlineBankingBE1.OnlineBankingContext;

namespace OnlineBankingBE1.Repository 
{
    public class InternetBankingRepository : IDataRepository<InternetBankingRegistration>
    {
        private readonly OnlineBankingDB _IBRTrackingDBContext;

        public InternetBankingRepository(OnlineBankingDB EmpDBContext)
        {
            _IBRTrackingDBContext = EmpDBContext;
        }

        public void Add(InternetBankingRegistration entity)
        {
            _IBRTrackingDBContext.internetBankingRegistrations.Add(entity);
            _IBRTrackingDBContext.SaveChanges();
        }

        public void Delete(int entity)
        {
            InternetBankingRegistration internetBankingRegistration = _IBRTrackingDBContext.internetBankingRegistrations.Find(entity);
            _IBRTrackingDBContext.internetBankingRegistrations.Remove(internetBankingRegistration);
            _IBRTrackingDBContext.SaveChanges();
        }

        public InternetBankingRegistration Get(int accountNumber)
        {
            return _IBRTrackingDBContext.internetBankingRegistrations.FirstOrDefault(b => b.AccountNumber == accountNumber);
        }

        public IEnumerable<InternetBankingRegistration> GetAll()
        {
            return _IBRTrackingDBContext.internetBankingRegistrations.ToList();
        }

        public IEnumerable<InternetBankingRegistration> GetByAccount(int faccount)
        {
            return _IBRTrackingDBContext.internetBankingRegistrations.Where(a => a.AccountNumber == faccount).ToList();
        }

        public void Update(InternetBankingRegistration dbEntity, InternetBankingRegistration entity)
        {
            //dbEntity.InternetBankingID = entity.InternetBankingID;
            dbEntity.AccountNumber = entity.AccountNumber;
            dbEntity.LoginPassword = entity.LoginPassword;
            dbEntity.ConfirmLoginPassword = entity.ConfirmLoginPassword;
            //dbEntity.TransactionPassword = entity.TransactionPassword;
            //dbEntity.ConfirmTransactionPassword = entity.ConfirmTransactionPassword;
            dbEntity.Answer = entity.Answer;
            _IBRTrackingDBContext.SaveChanges();
        }

        public InternetBankingRegistration ValidateAnswer(InternetBankingRegistration entity)
        {
            var CurrAdmin = _IBRTrackingDBContext.internetBankingRegistrations.FirstOrDefault
                (
                  Admin => Admin.AccountNumber == entity.AccountNumber
                  && Admin.Answer == entity.Answer);

            return CurrAdmin;
        }
    }
}
