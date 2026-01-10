import os

file_path = r'src\pages\Home.tsx'
start_line = 485
end_line = 508

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Verify content (1-based line numbers, so index = line - 1)
start_index = start_line - 1
end_index = end_line - 1

print(f"Line {start_line}: {lines[start_index].strip()}")
print(f"Line {end_line}: {lines[end_index].strip()}")

# Check if lines look like what we expect
if "BentoGridItem" in lines[start_index] and "</BentoGridItem>" in lines[end_index]:
    print("Found expected tags. Removing lines...")
    # Keep lines before start_index and lines after end_index
    new_lines = lines[:start_index] + lines[end_index+1:]
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    print("File updated successfully.")
else:
    print("Lines did not match expected content. Aborting.")
