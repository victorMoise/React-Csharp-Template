﻿using System.Text.RegularExpressions;

namespace backend.Utils
{
    public class EmailValidator
    {
        private static readonly string EmailPattern = @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";

        public static bool IsValidEmail(string email)
        {
            if (string.IsNullOrEmpty(email))
            {
                return false;
            }

            return Regex.IsMatch(email, EmailPattern);
        }
    }
}
