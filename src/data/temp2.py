import os


plant_image_folder = os.path.join("/home/haraman/Downloads", "Website")

for chapter in os.listdir(plant_image_folder):
    for file in os.listdir(os.path.join(plant_image_folder, chapter)):
        file_path = os.path.join(plant_image_folder, chapter, file)
        print(file_path)
        new_file_path = file_path.replace(".jpg", ".JPG").replace(".jpeg", ".JPG").replace("-", "_")
        if not os.path.exists(new_file_path):
            os.rename(file_path, new_file_path)
