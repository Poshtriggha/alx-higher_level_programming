def remove_char_at(input_str, n):
    if n < 0 or n >= len(input_str):
        return input_str  # Return the original string if the index is out of bounds
    
    result = ""
    
    for i in range(len(input_str)):
        if i != n:
            result += input_str[i]
    
    return result

# Example usage:
original_str = "Hello, World!"
index_to_remove = 5
new_str = remove_char_at(original_str, index_to_remove)
print(f"Original String: {original_str}")
print(f"String with character at index {index_to_remove} removed: {new_str}")
