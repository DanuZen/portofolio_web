import os

file_path = r'src\pages\Home.tsx'
start_line = 484
end_line = 508

try:
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    # 1-based to 0-based
    start_index = start_line - 1
    end_index = end_line - 1

    print(f"Total lines before: {len(lines)}")
    print(f"Removing lines {start_line} to {end_line}")
    
    # Print lines to be removed for verification
    for i in range(start_index, end_index + 1):
        print(f"Removing: {lines[i].strip()}")

    # Keep lines before start_index and lines after end_index
    new_lines = lines[:start_index] + lines[end_index+1:]
    
    print(f"Total lines after: {len(new_lines)}")

    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    print("File updated successfully.")

except Exception as e:
    print(f"Error: {e}")
