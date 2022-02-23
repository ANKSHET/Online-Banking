using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OnlineBankingBE1.Models;
using OnlineBankingBE1.OnlineBankingContext;

namespace OnlineBankingBE1.Repository
{
    public class RTGSRepository : IDataRepository<RTGSPay>
    {
        private readonly OnlineBankingDB _IBRTrackingDBContext;

        public RTGSRepository(OnlineBankingDB EmpDBContext)
        {
            _IBRTrackingDBContext = EmpDBContext;
        }

        public void Add(RTGSPay entity)
        {
            _IBRTrackingDBContext.rTGSPays.Add(entity);
            _IBRTrackingDBContext.SaveChanges();
        }

        public void Delete(int entity)
        {
            RTGSPay internetBankingRegistration = _IBRTrackingDBContext.rTGSPays.Find(entity);
            _IBRTrackingDBContext.rTGSPays.Remove(internetBankingRegistration);
            _IBRTrackingDBContext.SaveChanges();
        }

        public RTGSPay Get(int id)
        {
            return _IBRTrackingDBContext.rTGSPays.Find(id);
        }

        public IEnumerable<RTGSPay> GetAll()
        {
            return _IBRTrackingDBContext.rTGSPays.ToList();
        }

        public IEnumerable<RTGSPay> GetByAccount(int faccount)
        {
            return _IBRTrackingDBContext.rTGSPays.Where(a => a.FromAccount == faccount).ToList();
        }

        public void Update(RTGSPay dbEntity, RTGSPay entity)
        {
           // dbEntity.RTGSId = entity.RTGSId;
            dbEntity.FromAccount = entity.FromAccount;
            dbEntity.ToAccount = entity.ToAccount;
            dbEntity.Amount = entity.Amount;
            dbEntity.TransactionDate = entity.TransactionDate;
            dbEntity.MaturityInstruction = entity.MaturityInstruction;
            dbEntity.Remarks = entity.Remarks;
            _IBRTrackingDBContext.SaveChanges();
        }
    }
}
