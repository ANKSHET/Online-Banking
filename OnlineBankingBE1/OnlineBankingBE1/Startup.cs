using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using OnlineBankingBE1.Models;
using OnlineBankingBE1.OnlineBankingContext;
using OnlineBankingBE1.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBankingBE1
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //// Enable CORS
            //services.AddCors(c =>
            //{
            //    c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin().AllowAnyMethod()
            //     .AllowAnyHeader());
            //});
            services.AddControllers().AddNewtonsoftJson();

            services.AddDbContextPool<OnlineBankingDB>(options => options.UseSqlServer(Configuration["ConnectionStrings:AdminContext"]));
            services.AddScoped<IDataRepository<SavingsAccount>, SavingsAccountRepository>();
            services.AddScoped<IDataAdmin<AdminLogin>, AdminRepository>();
            services.AddScoped<IDataUser<InternetBankingRegistration>, UserLoginRepository>();
            services.AddScoped<IDataRepository<InternetBankingRegistration>, InternetBankingRepository>();
            services.AddScoped<IDataRepository<AccountStatement>, AccountStatementRepository>();
            services.AddScoped<IDataRepository<IMPSPay>, IMPSRepository>();
            services.AddScoped<IDataRepository<NeftPay>, NeftRepository>();
            services.AddScoped<IDataRepository<RTGSPay>, RTGSRepository>();
            services.AddScoped<IDataAdmin<InternetBankingRegistration>, ForgotPasswordRepository>();
            // Add Cors
            services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            }));

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Online Banking App", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Online Banking App v1"));
            }
            

            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.),
            // specifying the Swagger JSON endpoint.

            // Enable Cors
            //app.UseCors("MyPolicy");
            app.UseHttpsRedirection();
            
            
            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                //Route(
                //    name: "default",
                //    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
