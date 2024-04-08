using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Practicum.data.Migrations
{
    public partial class migration1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Status",
                table: "EmployeeList",
                newName: "status");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "status",
                table: "EmployeeList",
                newName: "Status");
        }
    }
}
