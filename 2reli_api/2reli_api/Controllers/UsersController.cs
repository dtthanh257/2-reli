using Dapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySqlConnector;

namespace _2reli_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        [HttpGet]
        public async Task<IEnumerable<User>> GetUsers()
        {
        var connectionString = "Server=localhost;Port=3306;Database=2reli_database;Uid=root;Pwd=1234;";
            var connecttion = new MySqlConnection(connectionString);
            var sql = "SELECT * FROM User";
            var result = await connecttion.QueryAsync<User>(sql);
            return result;
        }
        private readonly string _connectionString = "Server=localhost;Port=3306;Database=2reli_database;Uid=root;Pwd=1234;";

        [HttpPost]
        public async Task<IActionResult> AddUser(User newUser)
        {
            try
            {
                using (var connection = new MySqlConnection(_connectionString))
                {
                    await connection.OpenAsync();

                    var sql = @"INSERT INTO User (name, password, phone_number, nickname ) 
                                VALUES (@Name, @Password, @Phone_Number, @Nickname)";
                    var parameters = new
                    {
                        newUser.Name,
                        newUser.Password,
                        newUser.Phone_Number,
                        newUser.Nickname,
                    };

                    await connection.ExecuteAsync(sql, parameters);

                    await connection.ExecuteAsync(sql, newUser);

                    return Ok("User added successfully");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error adding user: " + ex.Message);
            }
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserById(int id)
        {
            try
            {
                using (var connection = new MySqlConnection(_connectionString))
                {
                    await connection.OpenAsync();

                    var sql = "SELECT * FROM User WHERE id = @Id";

                    var user = await connection.QueryFirstOrDefaultAsync<User>(sql, new { Id = id });

                    if (user == null)
                    {
                        return NotFound();
                    }

                    return Ok(user);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error fetching user: " + ex.Message);
            }
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, UserUpdate updatedUser)
        {
            try
            {
                using (var connection = new MySqlConnection(_connectionString))
                {
                    await connection.OpenAsync();

                    var sql = @"UPDATE user 
                        SET name = @Name,
                            phone_number = @Phone_Number,
                            nickname = @Nickname,
                            email = @Email,
                            province = @Province,
                            district = @District,
                            ward = @Ward,
                            address = @Address,
                            dob = @Dob,
                            gender = @Gender
                        WHERE id = @Id";

                    var parameters = new
                    {
                        updatedUser.Name,
                        updatedUser.Phone_Number,
                        updatedUser.Nickname,
                        updatedUser.Email,
                        updatedUser.Province,
                        updatedUser.District,
                        updatedUser.Ward,
                        updatedUser.Address,
                        updatedUser.Dob,
                        updatedUser.Gender,
                        Id = id
                    };

                    await connection.ExecuteAsync(sql, parameters);

                    return Ok("User updated successfully");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error updating user: {ex.Message}");
            }
        }

    }
}
