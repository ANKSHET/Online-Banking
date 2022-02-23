using OnlineBankingBE1.Models;
using OnlineBankingBE1.OnlineBankingContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBankingBE1.Repository
{
    public class SavingsAccountRepository : IDataRepository<SavingsAccount>
    {
        private readonly OnlineBankingDB _SavingsAccountTrackingDBContext;
        public SavingsAccountRepository(OnlineBankingDB EmpDBContext)
        {
            _SavingsAccountTrackingDBContext = EmpDBContext;
        }
        public void Add(SavingsAccount entity)
        {
            _SavingsAccountTrackingDBContext.savingsAccounts.Add(entity);
            _SavingsAccountTrackingDBContext.SaveChanges();
        }

        public void Delete(int entity)
        {
            SavingsAccount savingsAccount = _SavingsAccountTrackingDBContext.savingsAccounts.Find(entity);
            _SavingsAccountTrackingDBContext.savingsAccounts.Remove(savingsAccount);
            _SavingsAccountTrackingDBContext.SaveChanges();
        }

        public SavingsAccount Get(int accnum)
        {
            return _SavingsAccountTrackingDBContext.savingsAccounts.Find(accnum);
        }
        

        public IEnumerable<SavingsAccount> GetAll()
        {
            return _SavingsAccountTrackingDBContext.savingsAccounts.ToList();
        }

        public IEnumerable<SavingsAccount> GetByAccount(int id)
        {
            throw new NotImplementedException();
        }

        public void Update(SavingsAccount dbEntity, SavingsAccount entity)
        {
            //dbEntity.AccountNumber = entity.AccountNumber;
            dbEntity.FirstName = entity.FirstName;
            dbEntity.MiddleName = entity.MiddleName;
            dbEntity.LastName = entity.LastName;
            dbEntity.FathersName = entity.FathersName;
            dbEntity.PhoneNumber = entity.PhoneNumber;
            dbEntity.EmailId = entity.EmailId;
            dbEntity.AadharNumber = entity.AadharNumber;
            dbEntity.DOB = entity.DOB;
            dbEntity.Address = entity.Address;
            dbEntity.OccupationDetails = entity.OccupationDetails;
            _SavingsAccountTrackingDBContext.SaveChanges();
        }
    }
}
