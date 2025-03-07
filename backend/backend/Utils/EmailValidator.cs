using System.Text.RegularExpressions;

namespace backend.Utils
{
    public class EmailValidator
    {
        // Regular expression for validating an email address
        private const string EmailPattern = @"^[^@\s]+@[^@\s]+\.[^@\s]+$";

        public bool IsValidEmail(string email)
        {
            if (string.IsNullOrWhiteSpace(email))
            {
                return false;
            }

            // Use Regex to match the email pattern
            return Regex.IsMatch(email, EmailPattern, RegexOptions.IgnoreCase);
        }
    }
}
