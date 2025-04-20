import random
import string

def generate_password(length=12, use_lowercase=True, use_uppercase=True, use_digits=True, use_symbols=True):
    """Generates a random password with specified criteria.

    Args:
        length (int): The desired length of the password (default is 12).
        use_lowercase (bool): Include lowercase letters (default is True).
        use_uppercase (bool): Include uppercase letters (default is True).
        use_digits (bool): Include digits (0-9) (default is True).
        use_symbols (bool): Include special symbols (default is True).

    Returns:
        str: The generated random password.
    """

    characters = ""
    if use_lowercase:
        characters += string.ascii_lowercase
    if use_uppercase:
        characters += string.ascii_uppercase
    if use_digits:
        characters += string.digits
    if use_symbols:
        characters += string.punctuation

    if not characters:
        return "Error: At least one character type must be selected."

    password = ''.join(random.choice(characters) for _ in range(length))
    return password

if __name__ == "__main__":
    password_length = int(input("Enter the desired password length: "))
    include_lowercase = input("Include lowercase letters? (y/n): ").lower() == 'y'
    include_uppercase = input("Include uppercase letters? (y/n): ").lower() == 'y'
    include_digits = input("Include digits? (y/n): ").lower() == 'y'
    include_symbols = input("Include symbols? (y/n): ").lower() == 'y'

    generated_password = generate_password(
        length=password_length,
        use_lowercase=include_lowercase,
        use_uppercase=include_uppercase,
        use_digits=include_digits,
        use_symbols=include_symbols
    )

    print("Generated Password:", generated_password)
