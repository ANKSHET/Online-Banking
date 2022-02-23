using OnlineBankingBE1.Models;
using OnlineBankingBE1.OnlineBankingContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBankingBE1.Repository
{
    public class IMPSRepository : IDataRepository<IMPSPay>
    {
        private readonly OnlineBankingDB _IBRTrackingDBContext;

        public IMPSRepository(OnlineBankingDB EmpDBContext)
        {
            _IBRTrackingDBContext = EmpDBContext;
        }

        public void Add(IMPSPay entity)
        {
            _IBRTrackingDBContext.iMPSPays.Add(entity);
            _IBRTrackingDBContext.SaveChanges();
        }

        public void Delete(int entity)
        {
            IMPSPay internetBankingRegistration = _IBRTrackingDBContext.iMPSPays.Find(entity);
            _IBRTrackingDBContext.iMPSPays.Remove(internetBankingRegistration);
            _IBRTrackingDBContext.SaveChanges();
        }

        public IMPSPay Get(int id)
        {
            return _IBRTrackingDBContext.iMPSPays.Find(id);
        }

        public IEnumerable<IMPSPay> GetAll()
        {
            return _IBRTrackingDBContext.iMPSPays.ToList();
        }

        public IEnumerable<IMPSPay> GetByAccount(int faccount)
        {
            return _IBRTrackingDBContext.iMPSPays.Where(a => a.FromAccount == faccount).ToList();
        }

        public void Update(IMPSPay dbEntity, IMPSPay entity)
        {
            //dbEntity.IMPSID = entity.IMPSID;
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
