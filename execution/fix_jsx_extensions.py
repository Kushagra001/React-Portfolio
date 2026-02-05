import os
import re

def is_jsx(content):
    return 'import React' in content or re.search(r'<[A-Z][A-Za-z0-9]*', content) or re.search(r'</[a-z]+>', content)

def fix_extensions(root_dir):
    renamed_count = 0
    for dirpath, _, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename.endswith('.js'):
                path = os.path.join(dirpath, filename)
                try:
                    with open(path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    if is_jsx(content):
                        new_path = path + 'x'
                        os.rename(path, new_path)
                        print(f"Renamed: {path} -> {new_path}")
                        renamed_count += 1
                except Exception as e:
                    print(f"Skipped {path}: {e}")
    print(f"Total renamed: {renamed_count}")

if __name__ == '__main__':
    fix_extensions('c:/Users/kusha/Downloads/react-portfolio-main/src')
