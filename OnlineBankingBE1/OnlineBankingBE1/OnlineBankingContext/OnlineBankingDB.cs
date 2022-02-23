using Microsoft.EntityFrameworkCore;
using OnlineBankingBE1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBankingBE1.OnlineBankingContext
{
    public class OnlineBankingDB : DbContext
    {
        

        public OnlineBankingDB(DbContextOptions<OnlineBankingDB> contextOptions) : base(contextOptions)
        {

        }
        public DbSet<AdminLogin> adminLogins { get; set; }
        public DbSet<InternetBankingRegistration> internetBankingRegistrations { get; set; }
        public DbSet<UserLogin> userLogins { get; set; }
        public DbSet<SavingsAccount> savingsAccounts { get; set; }
        public DbSet<AccountStatement> accountStatements { get; set; }
        public DbSet<IMPSPay> iMPSPays { get; set; }
        public DbSet<NeftPay> neftPays { get; set; }
        public DbSet<RTGSPay> rTGSPays { get; set; }
    }
}
