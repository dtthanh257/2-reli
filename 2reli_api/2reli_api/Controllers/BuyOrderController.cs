using Dapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySqlConnector;

namespace _2reli_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuyOrderController : ControllerBase
    {
        private readonly string _connectionString = "Server=localhost;Port=3306;Database=2reli_database;Uid=root;Pwd=1234;";

        [HttpPost] // Đánh dấu phương thức là HTTP POST
        public async Task<IActionResult> AddToBuyOderList(BuyOrderItem buyOrderItem) // Chỉnh sửa kiểu trả về và tham số
        {
            try
            {
                using (var connection = new MySqlConnection(_connectionString))
                {
                    await connection.OpenAsync();

                    var sql = @"INSERT INTO buy_order (sell_name, product_name, product_quantity, product_price, product_status, buyer_id) 
                                VALUES (@Seller_name, @Product_name, @Product_quantity, @Product_price, @Product_status,@Buyer_id)";
                    var parameters = new
                    {
                        buyOrderItem.Seller_name,
                        buyOrderItem.Product_name,
                        buyOrderItem.Product_quantity,
                        buyOrderItem.Product_price,
                        buyOrderItem.Product_status,
                        buyOrderItem.Buyer_id,
                    };

                    await connection.ExecuteAsync(sql, parameters);

                    return Ok("Product added to buy order successfully");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error adding product to buy order: {ex.Message}");
            }
        }
    }
}
