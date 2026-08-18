import os
import glob
from PIL import Image, ImageEnhance, ImageDraw, ImageFilter

def create_vignette(image, radius=0.2):
    # Create a vignette mask
    vignette = Image.new('L', image.size, 255)
    draw = ImageDraw.Draw(vignette)
    
    # Calculate the bounding box for the vignette ellipse
    width, height = image.size
    x_margin = int(width * radius)
    y_margin = int(height * radius)
    
    draw.ellipse((0, 0, width, height), fill=200)
    
    # Blur the vignette
    vignette = vignette.filter(ImageFilter.GaussianBlur(min(width, height) * 0.2))
    
    # Apply to image by blending with black
    black = Image.new('RGB', image.size, (0, 0, 0))
    result = Image.composite(image, black, vignette)
    return result

def enhance_image(filepath, output_dir):
    filename = os.path.basename(filepath)
    if filename.startswith('enhanced_'): return
    
    try:
        with Image.open(filepath) as img:
            img = img.convert('RGB')
            
            # 1. Standard crop ratio (4:3 for landscape, 3:4 for portrait)
            width, height = img.size
            if width >= height:
                target_ratio = 4.0 / 3.0
                if width / height > target_ratio:
                    new_width = int(height * target_ratio)
                    offset = (width - new_width) // 2
                    img = img.crop((offset, 0, offset + new_width, height))
                elif width / height < target_ratio:
                    new_height = int(width / target_ratio)
                    offset = (height - new_height) // 2
                    img = img.crop((0, offset, width, offset + new_height))
            else:
                target_ratio = 3.0 / 4.0
                if width / height > target_ratio:
                    new_width = int(height * target_ratio)
                    offset = (width - new_width) // 2
                    img = img.crop((offset, 0, offset + new_width, height))
                elif width / height < target_ratio:
                    new_height = int(width / target_ratio)
                    offset = (height - new_height) // 2
                    img = img.crop((0, offset, width, offset + new_height))
                    
            # 2. Resize to standard width for web optimization
            target_width = 1200 if img.size[0] > img.size[1] else 900
            target_height = int(target_width / target_ratio) if img.size[0] > img.size[1] else int(target_width / target_ratio)
            
            img = img.resize((target_width, target_height), Image.Resampling.LANCZOS)
            
            # 3. Enhancements (Color, Contrast, Sharpness)
            # Cinematic grade: slightly saturated, punchy contrast
            img = ImageEnhance.Color(img).enhance(1.2)
            img = ImageEnhance.Contrast(img).enhance(1.15)
            img = ImageEnhance.Brightness(img).enhance(1.05)
            img = ImageEnhance.Sharpness(img).enhance(1.5)
            
            # 4. Vignette / Subject emphasis
            img = create_vignette(img, radius=0.1)
            
            # 5. Web optimization & save
            out_filename = os.path.splitext(filename)[0] + '.webp'
            out_path = os.path.join(output_dir, out_filename)
            img.save(out_path, 'WEBP', quality=85)
            print(f"Processed {filename} -> {out_filename}")
            
    except Exception as e:
        print(f"Failed to process {filename}: {e}")

def main():
    input_dir = 'c:/Users/SHOBHIT/Documents/projects/second-bell/public/images/paalanhaar'
    output_dir = os.path.join(input_dir, 'enhanced')
    
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        
    image_files = []
    for ext in ['*.jpg', '*.jpeg', '*.png']:
        image_files.extend(glob.glob(os.path.join(input_dir, ext)))
        
    print(f"Found {len(image_files)} images to process.")
    for f in image_files:
        enhance_image(f, output_dir)
        
if __name__ == '__main__':
    main()
