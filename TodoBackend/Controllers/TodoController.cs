using Microsoft.AspNetCore.Mvc;
using TodoBackend.Models;

namespace TodoBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodosController : ControllerBase
    {
        // In-memory data storage
        private static readonly List<Todo> _todos = new List<Todo>();

        [HttpGet]
        public ActionResult<IEnumerable<Todo>> GetTodos()
        {
            return Ok(_todos);
        }

        [HttpPost]
        public ActionResult<Todo> CreateTodo(Todo todo)
        {
            if (string.IsNullOrWhiteSpace(todo.Title))
                return BadRequest("Title is required.");

            todo.Id = Guid.NewGuid().ToString(); // Assign unique ID
            _todos.Add(todo);
            
            return CreatedAtAction(nameof(GetTodos), new { id = todo.Id }, todo);
        }

        [HttpPut("{id}")]
        public ActionResult<Todo> UpdateTodo(string id, Todo updatedTodo)
        {
            // Match by ID instead of title
            var todo = _todos.FirstOrDefault(t => t.Id == id); 
            if (todo == null)
                return NotFound();

            todo.Title = updatedTodo.Title;
            todo.IsCompleted = updatedTodo.IsCompleted;
            
            return Ok(todo);
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteTodo(string id)
        {
            // Match by ID instead of title
            var todo = _todos.FirstOrDefault(t => t.Id == id);
            if (todo == null)
                return NotFound();

            _todos.Remove(todo);
            return NoContent();
        }
    }
}
