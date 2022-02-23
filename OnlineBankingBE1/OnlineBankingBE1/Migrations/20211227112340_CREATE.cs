using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace OnlineBankingBE1.Migrations
{
    public partial class CREATE : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "accountStatements",
                columns: table => new
                {
                    AccountStatId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AccountNumber = table.Column<int>(nullable: false),
                    AccountType = table.Column<string>(nullable: false),
                    Balance = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_accountStatements", x => x.AccountStatId);
                });

            migrationBuilder.CreateTable(
                name: "adminLogins",
                columns: table => new
                {
                    AdminID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AdminEmail = table.Column<string>(nullable: false),
                    Password = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_adminLogins", x => x.AdminID);
                });

            migrationBuilder.CreateTable(
                name: "iMPSPays",
                columns: table => new
                {
                    IMPSID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FromAccount = table.Column<int>(nullable: false),
                    ToAccount = table.Column<int>(nullable: false),
                    Amount = table.Column<double>(nullable: false),
                    TransactionDate = table.Column<DateTime>(nullable: false),
                    MaturityInstruction = table.Column<string>(nullable: false),
                    Remarks = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_iMPSPays", x => x.IMPSID);
                });

            migrationBuilder.CreateTable(
                name: "internetBankingRegistrations",
                columns: table => new
                {
                    InternetBankingID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AccountNumber = table.Column<int>(nullable: false),
                    LoginPassword = table.Column<string>(nullable: true),
                    ConfirmLoginPassword = table.Column<string>(nullable: true),
                    Answer = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_internetBankingRegistrations", x => x.InternetBankingID);
                });

            migrationBuilder.CreateTable(
                name: "neftPays",
                columns: table => new
                {
                    NeftId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FromAccount = table.Column<int>(nullable: false),
                    ToAccount = table.Column<int>(nullable: false),
                    Amount = table.Column<double>(nullable: false),
                    TransactionDate = table.Column<DateTime>(nullable: false),
                    Remarks = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_neftPays", x => x.NeftId);
                });

            migrationBuilder.CreateTable(
                name: "rTGSPays",
                columns: table => new
                {
                    RTGSId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FromAccount = table.Column<int>(nullable: false),
                    ToAccount = table.Column<int>(nullable: false),
                    Amount = table.Column<double>(nullable: false),
                    TransactionDate = table.Column<DateTime>(nullable: false),
                    MaturityInstruction = table.Column<string>(nullable: false),
                    Remarks = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_rTGSPays", x => x.RTGSId);
                });

            migrationBuilder.CreateTable(
                name: "savingsAccounts",
                columns: table => new
                {
                    AccountNumber = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(maxLength: 50, nullable: false),
                    MiddleName = table.Column<string>(maxLength: 50, nullable: true),
                    LastName = table.Column<string>(maxLength: 50, nullable: false),
                    FathersName = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: false),
                    EmailId = table.Column<string>(nullable: true),
                    AadharNumber = table.Column<string>(nullable: true),
                    DOB = table.Column<DateTime>(nullable: false),
                    Address = table.Column<string>(maxLength: 50, nullable: false),
                    OccupationDetails = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_savingsAccounts", x => x.AccountNumber);
                });

            migrationBuilder.CreateTable(
                name: "userLogins",
                columns: table => new
                {
                    AccountKey = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AccountNumber = table.Column<int>(nullable: false),
                    Password = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_userLogins", x => x.AccountKey);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "accountStatements");

            migrationBuilder.DropTable(
                name: "adminLogins");

            migrationBuilder.DropTable(
                name: "iMPSPays");

            migrationBuilder.DropTable(
                name: "internetBankingRegistrations");

            migrationBuilder.DropTable(
                name: "neftPays");

            migrationBuilder.DropTable(
                name: "rTGSPays");

            migrationBuilder.DropTable(
                name: "savingsAccounts");

            migrationBuilder.DropTable(
                name: "userLogins");
        }
    }
}
