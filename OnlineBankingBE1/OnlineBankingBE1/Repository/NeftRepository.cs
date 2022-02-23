using OnlineBankingBE1.Models;
using OnlineBankingBE1.OnlineBankingContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBankingBE1.Repository
{
    public class NeftRepository : IDataRepository<NeftPay>
    {
        private readonly OnlineBankingDB _IBRTrackingDBContext;

        public NeftRepository(OnlineBankingDB EmpDBContext)
        {
            _IBRTrackingDBContext = EmpDBContext;
        }

        public void Add(NeftPay entity)
        {
            _IBRTrackingDBContext.neftPays.Add(entity);
            _IBRTrackingDBContext.SaveChanges();
        }

        public void Delete(int entity)
        {
            NeftPay internetBankingRegistration = _IBRTrackingDBContext.neftPays.Find(entity);
            _IBRTrackingDBContext.neftPays.Remove(internetBankingRegistration);
            _IBRTrackingDBContext.SaveChanges();
        }

        public IEnumerable<NeftPay> GetByAccount(int faccount)
        {
            return _IBRTrackingDBContext.neftPays.Where(a=>a.FromAccount == faccount).ToList();
        }

        public IEnumerable<NeftPay> GetAll()
        {
            return _IBRTrackingDBContext.neftPays.ToList();
        }

        public void Update(NeftPay dbEntity, NeftPay entity)
        {
            //dbEntity.NeftId = entity.NeftId;
            dbEntity.FromAccount = entity.FromAccount;
            dbEntity.ToAccount = entity.ToAccount;
            dbEntity.Amount = entity.Amount;
            dbEntity.TransactionDate = entity.TransactionDate;
            dbEntity.Remarks = entity.Remarks;
            _IBRTrackingDBContext.SaveChanges();
        }

        public NeftPay Get(int id)
        {
            throw new NotImplementedException();
        }
    }
}
