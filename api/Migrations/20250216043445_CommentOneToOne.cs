using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class CommentOneToOne : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Portfolios_Stocks_stockId",
                table: "Portfolios");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4db6db78-7445-43b9-a1e2-d9e28af3b291");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "84fcfb95-395c-4856-8780-071d4710e707");

            migrationBuilder.RenameColumn(
                name: "stockId",
                table: "Portfolios",
                newName: "StockId");

            migrationBuilder.RenameIndex(
                name: "IX_Portfolios_stockId",
                table: "Portfolios",
                newName: "IX_Portfolios_StockId");

            migrationBuilder.AddColumn<string>(
                name: "AppUserId",
                table: "Comments",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "6d93fe8d-7584-4656-868d-a001a6304c70", null, "Admin", "ADMIN" },
                    { "f56fe626-2008-4346-b01c-b196031dc0ed", null, "User", "USER" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Comments_AppUserId",
                table: "Comments",
                column: "AppUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_AspNetUsers_AppUserId",
                table: "Comments",
                column: "AppUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Portfolios_Stocks_StockId",
                table: "Portfolios",
                column: "StockId",
                principalTable: "Stocks",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_AspNetUsers_AppUserId",
                table: "Comments");

            migrationBuilder.DropForeignKey(
                name: "FK_Portfolios_Stocks_StockId",
                table: "Portfolios");

            migrationBuilder.DropIndex(
                name: "IX_Comments_AppUserId",
                table: "Comments");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6d93fe8d-7584-4656-868d-a001a6304c70");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f56fe626-2008-4346-b01c-b196031dc0ed");

            migrationBuilder.DropColumn(
                name: "AppUserId",
                table: "Comments");

            migrationBuilder.RenameColumn(
                name: "StockId",
                table: "Portfolios",
                newName: "stockId");

            migrationBuilder.RenameIndex(
                name: "IX_Portfolios_StockId",
                table: "Portfolios",
                newName: "IX_Portfolios_stockId");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "4db6db78-7445-43b9-a1e2-d9e28af3b291", null, "Admin", "ADMIN" },
                    { "84fcfb95-395c-4856-8780-071d4710e707", null, "User", "USER" }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Portfolios_Stocks_stockId",
                table: "Portfolios",
                column: "stockId",
                principalTable: "Stocks",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
