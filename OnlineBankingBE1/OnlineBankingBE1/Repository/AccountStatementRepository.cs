using OnlineBankingBE1.Models;
using OnlineBankingBE1.OnlineBankingContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBankingBE1.Repository
{
    public class AccountStatementRepository : IDataRepository<AccountStatement>
    {
        private readonly OnlineBankingDB _IBRTrackingDBContext;

        public AccountStatementRepository(OnlineBankingDB EmpDBContext)
        {
            _IBRTrackingDBContext = EmpDBContext;
        }

        public void Add(AccountStatement entity)
        {
            _IBRTrackingDBContext.accountStatements.Add(entity);
            _IBRTrackingDBContext.SaveChanges();
        }

        public void Delete(int entity)
        {
            AccountStatement internetBankingRegistration = _IBRTrackingDBContext.accountStatements.Find(entity);
            _IBRTrackingDBContext.accountStatements.Remove(internetBankingRegistration);
            _IBRTrackingDBContext.SaveChanges();
        }

        public AccountStatement Get(int accnum)
        {
            return _IBRTrackingDBContext.accountStatements.FirstOrDefault(a => a.AccountNumber == accnum);
        }
        
        public AccountStatement GetAccountStatId(int id)
        {
            return _IBRTrackingDBContext.accountStatements.Find(id);
        }
        public IEnumerable<AccountStatement> GetAll()
        {
            return _IBRTrackingDBContext.accountStatements.ToList();
        }

        public IEnumerable<AccountStatement> GetByAccount(int id)
        {
            throw new NotImplementedException();
        }

        public void Update(AccountStatement dbEntity, AccountStatement entity)
        {
            //dbEntity.AccountStatId = entity.AccountStatId;
            dbEntity.AccountNumber = entity.AccountNumber;
            dbEntity.AccountType = entity.AccountType;
            dbEntity.Balance = entity.Balance;
            _IBRTrackingDBContext.SaveChanges();
        }
    }
}
