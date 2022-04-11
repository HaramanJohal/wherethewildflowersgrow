import os


plant_image_folder = os.path.join(os.getcwd(), "plant_images")

for file in os.listdir(plant_image_folder):
    file_path = os.path.join(os.getcwd(), "plant_images", file)
    print(file_path)
    os.rename(file_path, file_path.replace(".jpg", ".JPG").replace(".jpeg", ".JPG").replace("-", "_"))
