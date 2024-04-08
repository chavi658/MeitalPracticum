using Practicum.core.Models;

namespace Practicum.API.Models
{
    public class EmployeePostModel
    {
        public string TZ { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Password { get; set; }

        public Status status { get; set; }

        public Gender Gender { get; set; }

        public DateTime DateOfStart { get; set; }

        public DateTime DateOfBirth { get; set; }
    }
}
