import os
import re

base_dir = './'  # Adjust if needed
output_file = 'README.md'
day_folders = sorted(
    [f for f in os.listdir(base_dir) if re.match(r'day\d+$', f)],
    key=lambda x: int(re.search(r'\d+', x).group())
)

combined = []

for folder in day_folders:
    readme_path = os.path.join(base_dir, folder, 'README.md')
    if os.path.isfile(readme_path):
        with open(readme_path, 'r', encoding='utf-8') as f:
            content = f.read()

            # Fix image paths
            content = re.sub(r'!\[([^\]]*)\]\(([^)]+)\)', 
                             lambda m: f"![{m.group(1)}]({folder}/{m.group(2)})",
                             content)

            # Add a header for each day
            combined.append(f"# {folder}\n\n{content}\n\n")
    else:
        print(f"⚠️ Skipping {folder} (Readme.md not found)")

# Write to output file
with open(output_file, 'w', encoding='utf-8') as f:
    f.writelines(combined)

print(f"✅ Combined markdown saved as '{output_file}' with image paths fixed.")
