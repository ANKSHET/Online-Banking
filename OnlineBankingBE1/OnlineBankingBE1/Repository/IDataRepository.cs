using OnlineBankingBE1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBankingBE1.Repository
{
    public interface IDataRepository<TEntity>
    {
        IEnumerable<TEntity> GetAll();
        TEntity Get(int id);
        
        void Add(TEntity entity);
        void Update(TEntity dbEntity, TEntity entity);
        void Delete(int entity);
        IEnumerable<TEntity> GetByAccount(int id);
        
    }
}
