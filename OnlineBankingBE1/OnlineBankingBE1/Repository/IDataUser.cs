using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBankingBE1.Repository
{
    public interface IDataUser<TEntity>
    {
        TEntity ValidateAdmin(TEntity entity);
        void Add(TEntity entity);
    }
}
